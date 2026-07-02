const db = require("../config/db");

const {
  getCost,
  findAssignment,
} = require("../algorithms/hungarian");

const {
  createShiftSlots,
  getShiftCode,
  getShiftName,
} = require("../helpers/shiftHelper");

const {
  convertJadwalToHistori,
} = require("../helpers/historiHelper");

const query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

async function jalankanOptimasi({ bulan, tahun }) {
  // =========================================
  // Cek histori sudah ada?
  // =========================================

  const cek = await query(
    `
    SELECT COUNT(*) total
    FROM histori_shift
    WHERE bulan=?
    AND tahun=?
    `,
    [bulan, tahun]
  );

  if (cek[0].total > 0) {
    throw new Error(
      "Periode tersebut sudah pernah dioptimasi."
    );
  }

  // =========================================
  // Bersihkan jadwal lama
  // =========================================

  await query("DELETE FROM jadwal");

  const jumlahHari = new Date(
    tahun,
    bulan,
    0
  ).getDate();

  let hasilTerakhir = [];
  let totalCost = 0;

  // =========================================
  // Generate per hari
  // =========================================

  for (
    let hari = 1;
    hari <= jumlahHari;
    hari++
  ) {

    let perawat = [];

    if (hari === 1) {

      perawat = await query(`
        SELECT
            kode_perawat,
            nama_perawat,
            'L' AS shift_terakhir
        FROM perawat
        ORDER BY kode_perawat
      `);

    } else {

      const kemarin = new Date(
        tahun,
        bulan - 1,
        hari - 1
      )
        .toISOString()
        .slice(0, 10);

      perawat = await query(
        `
        SELECT
            p.kode_perawat,
            p.nama_perawat,
            s.nama_shift
        FROM perawat p
        LEFT JOIN jadwal j
            ON j.kode_perawat=p.kode_perawat
            AND j.tanggal=?
        LEFT JOIN shift s
            ON s.kode_shift=j.kode_shift
        ORDER BY p.kode_perawat
      `,
        [kemarin]
      );

      perawat = perawat.map((p) => ({
        ...p,
        shift_terakhir:
          getShiftCode(p.nama_shift) || "L",
      }));
    }

    // =========================================
    // Ambil shift
    // =========================================

    const shift = await query(`
      SELECT *
      FROM shift
      ORDER BY kode_shift
    `);

    const slotShift =
      createShiftSlots(shift);

    // =========================================
    // Matrix Cost
    // =========================================

    const matrix = perawat.map((p) => ({
      kode_perawat:
        p.kode_perawat,
      nama_perawat:
        p.nama_perawat,
      costs: slotShift.map((slot) =>
        getCost(
          p.shift_terakhir,
          slot.nama_shift
        )
      ),
    }));

    const assignment =
      findAssignment(matrix);

    const hasil = assignment.map((a) => {

      const slot =
        slotShift[a.colIndex];

      const nurse =
        matrix.find(
          (x) =>
            x.kode_perawat ===
            a.kode_perawat
        );

      return {
        kode_perawat:
          a.kode_perawat,

        nama_perawat:
          nurse.nama_perawat,

        kode_shift:
          slot.kode_shift,

        nama_shift:
          slot.nama_shift,

        cost: a.cost,
      };
    });

    hasilTerakhir = hasil;

    totalCost += hasil.reduce(
      (s, x) => s + x.cost,
      0
    );

    const tanggal = new Date(
      tahun,
      bulan - 1,
      hari
    )
      .toISOString()
      .slice(0, 10);

    for (const item of hasil) {

      await query(
        `
        INSERT INTO jadwal
        (
            tanggal,
            kode_perawat,
            kode_shift,
            cost
        )
        VALUES
        (
            ?,?,?,?
        )
      `,
        [
          tanggal,
          item.kode_perawat,
          item.kode_shift,
          item.cost,
        ]
      );

    }

  }

  return {
    bulan,
    tahun,
    totalCost,
    hasil: hasilTerakhir,
  };
}

async function simpanHistori({
  bulan,
  tahun,
}) {

  const jadwal = await query(`
    SELECT
        j.*,
        s.nama_shift
    FROM jadwal j
    JOIN shift s
      ON s.kode_shift=j.kode_shift
    ORDER BY
      j.kode_perawat,
      j.tanggal
  `);

  const jumlahHari =
    new Date(
      tahun,
      bulan,
      0
    ).getDate();

  const histori =
    convertJadwalToHistori(
      jadwal,
      bulan,
      tahun,
      jumlahHari
    );

  for (const row of histori) {

    const values = [
      row.kode_perawat,
      row.bulan,
      row.tahun,
    ];

    for (
      let i = 1;
      i <= 31;
      i++
    ) {
      values.push(
        row[
          `d${String(i).padStart(2, "0")}`
        ]
      );
    }

    await query(
      `
      INSERT INTO histori_shift
      (
        kode_perawat,
        bulan,
        tahun,
        d01,d02,d03,d04,d05,
        d06,d07,d08,d09,d10,
        d11,d12,d13,d14,d15,
        d16,d17,d18,d19,d20,
        d21,d22,d23,d24,d25,
        d26,d27,d28,d29,d30,d31
      )
      VALUES
      (
        ?,?,?,
        ?,?,?,?,?,?,?,?,?,?,
        ?,?,?,?,?,?,?,?,?,?,
        ?,?,?,?,?,?,?,?,?,?,
        ?
      )
      `,
      values
    );

  }

  await query(`
    DELETE FROM jadwal
  `);

  return {
    message:
      "Optimasi bulan berhasil disimpan",
  };
}

module.exports = {
  jalankanOptimasi,
  simpanHistori,
};