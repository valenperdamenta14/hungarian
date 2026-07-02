const db = require("../config/db");

const {
  findAssignment,
} = require("../algorithms/hungarian");

const {
  getCost,
} = require("../helpers/costHelper");

const {
  createShiftSlots,
  getShiftCode,
} = require("../helpers/shiftHelper");

const {
  validateAssignment,
} = require("../helpers/validatorHelper");

const {
  repairAssignment,
} = require("../helpers/repairHelper");

const {
  convertJadwalToHistori,
} = require("../helpers/historiHelper");

const query = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

async function jalankanOptimasi({
  bulan,
  tahun,
}) {

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

  await query(`
    DELETE FROM jadwal
  `);

  const jumlahHari = new Date(
    tahun,
    bulan,
    0
  ).getDate();

  const shift = await query(`
    SELECT *
    FROM shift
    ORDER BY kode_shift
  `);

  const slotShift =
    createShiftSlots(shift);

  let totalCost = 0;

  let hasilTerakhir = [];

  let perawat = await query(`
      SELECT
          kode_perawat,
          nama_perawat,
          grup,
          jabatan
      FROM perawat
      ORDER BY kode_perawat
  `);

  const historiBulanLalu =
    await query(
      `
      SELECT *
      FROM histori_shift
      WHERE
      bulan = ?
      AND tahun = ?
      `,
      [
        bulan === 1 ? 12 : bulan - 1,
        bulan === 1
          ? tahun - 1
          : tahun,
      ]
    );

  perawat = perawat.map((p) => {

    const histori =
      historiBulanLalu.find(
        (h) =>
          h.kode_perawat ===
          p.kode_perawat
      );

    let shiftTerakhir = "L";

    if (histori) {

      const field =
        "d" +
        String(
          new Date(
            tahun,
            bulan - 1,
            0
          ).getDate()
        ).padStart(2, "0");

      const kode =
        histori[field] || "L";

      shiftTerakhir =
        getShiftCode(kode);

    }

    return {

      ...p,

      shift_terakhir:
        shiftTerakhir,

      histori:
        histori
          ? Object.keys(histori)
              .filter((x) =>
                x.startsWith("d")
              )
              .map(
                (x) =>
                  histori[x]
              )
          : [],

    };

  });
    for (
    let hari = 1;
    hari <= jumlahHari;
    hari++
  ) {

    const tanggal = new Date(
      tahun,
      bulan - 1,
      hari
    )
      .toISOString()
      .slice(0, 10);

    const matrix = [];

    for (const p of perawat) {

      let totalPagi = 0;
      let totalSore = 0;
      let totalMalam = 0;
      let totalLibur = 0;

      p.histori.forEach((x) => {

        if (x === "P") totalPagi++;
        else if (x === "S") totalSore++;
        else if (x === "M") totalMalam++;
        else totalLibur++;

      });

      const costs = [];

      for (const slot of slotShift) {

        const costAwal =
          getCost(
            p.shift_terakhir,
            slot.nama_shift
          );

        let cost =
          costAwal;

        if (
          slot.nama_shift === "Pagi" &&
          totalPagi >= 7
        ) {
          cost += 50;
        }

        if (
          slot.nama_shift === "Sore" &&
          totalSore >= 5
        ) {
          cost += 50;
        }

        if (
          slot.nama_shift === "Malam" &&
          totalMalam >= 5
        ) {
          cost += 50;
        }

        if (
          slot.nama_shift === "Libur" &&
          totalLibur >= 7
        ) {
          cost += 50;
        }

        costs.push(cost);

      }

      matrix.push({

        kode_perawat:
          p.kode_perawat,

        nama_perawat:
          p.nama_perawat,

        costs,

      });

    }

    const assignment =
      findAssignment(matrix);

    let hasilHariIni =
      assignment.map((item) => {

        const slot =
          slotShift[item.colIndex];

        const nurse =
          matrix.find(
            (x) =>
              x.kode_perawat ===
              item.kode_perawat
          );

        return {

          kode_perawat:
            nurse.kode_perawat,

          nama_perawat:
            nurse.nama_perawat,

          kode_shift:
            slot.kode_shift,

          nama_shift:
            slot.nama_shift,

          cost:
            item.cost,

        };

      });

    const historiMap = {};

    perawat.forEach((p) => {

      historiMap[
        p.kode_perawat
      ] = [...p.histori];

    });

    hasilHariIni =
      validateAssignment(
        hasilHariIni,
        historiMap
      );

    hasilHariIni =
      repairAssignment(
        hasilHariIni
      );

    for (const item of hasilHariIni) {

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

      const p =
        perawat.find(
          (x) =>
            x.kode_perawat ===
            item.kode_perawat
        );

      const kode =
        getShiftCode(
          item.nama_shift
        );

      p.shift_terakhir =
        kode;

      p.histori.push(kode);

      if (
        p.histori.length > 31
      ) {
        p.histori.shift();
      }

    }

    totalCost +=
      hasilHariIni.reduce(
        (a, b) =>
          a + b.cost,
        0
      );

    hasilTerakhir =
      hasilHariIni;

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
      j.kode_perawat,
      j.tanggal,
      s.nama_shift
    FROM jadwal j
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    ORDER BY
      j.kode_perawat,
      j.tanggal
  `);

  const jumlahHari = new Date(
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
        ] || null
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
    success: true,
    message:
      "Optimasi berhasil disimpan."
  };

}

module.exports = {
  jalankanOptimasi,
  simpanHistori,
};