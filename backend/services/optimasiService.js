const db = require("../config/db");

const {
  getCost,
  findAssignment,
} = require("../algorithms/hungarian");

const jalankanOptimasi = (hari) => {
  return new Promise((resolve, reject) => {
    if (hari < 1 || hari > 31) {
      return reject(
        new Error(
          "Hari harus antara 1 - 31"
        )
      );
    }

    const tanggal =
      `2025-12-${String(hari).padStart(2, "0")}`;

    let kolomHistori = null;
    if (hari > 1) {
      kolomHistori =
        `d${String(hari - 1).padStart(2, "0")}`;
    }

    let sqlPerawat = "";
    if (hari === 1) {

      sqlPerawat = `
        SELECT
          p.kode_perawat,
          p.nama_perawat,
          'Libur' AS shift_terakhir
        FROM perawat p
        ORDER BY p.kode_perawat
      `;

    }

    else {
      sqlPerawat = `
        SELECT
          p.kode_perawat,
          p.nama_perawat,
          h.${kolomHistori} AS shift_terakhir
        FROM perawat p
        JOIN histori_shift h
          ON h.kode_perawat = p.kode_perawat
        ORDER BY p.kode_perawat
      `;
    }

    db.query(
      sqlPerawat,
      (err, perawat) => {
        if (err) {
          return reject(err);
        }

        db.query(
          `
          SELECT *
          FROM shift
          ORDER BY kode_shift
          `,
          (err2, shift) => {

            if (err2) {
              return reject(err2);
            }

            const slotShift = [];
            shift.forEach((s) => {
              for (
                let i = 0;
                i < s.jumlah_shift;
                i++
              ) {
                slotShift.push({
                  kode_shift:
                    s.kode_shift,
                  nama_shift:
                    s.nama_shift,
                });
              }
            });

            const matrix = [];
            perawat.forEach((p) => {
              const row = [];
              slotShift.forEach((slot) => {
                const cost = getCost(
                  p.shift_terakhir,
                  slot.nama_shift
                );

                row.push(cost);
              });

              matrix.push({
                kode_perawat:
                  p.kode_perawat,
                nama_perawat:
                  p.nama_perawat,
                costs: row,
              });
            });

            const assignment =
              findAssignment(matrix);

              const hasil =
              assignment.map((item) => {

                const slot =
                  slotShift[item.colIndex];

                const perawatData =
                  matrix.find(
                    (p) =>
                      p.kode_perawat ===
                      item.kode_perawat
                  );

                return {
                  kode_perawat:
                    item.kode_perawat,
                  nama_perawat:
                    perawatData.nama_perawat,
                  kode_shift:
                    slot.kode_shift,
                  nama_shift:
                    slot.nama_shift,
                  cost:
                    item.cost,
                };
              });

            const totalCost =
              hasil.reduce(
                (sum, item) =>
                  sum + item.cost,
                0
              );

            const deleteSql = `
              DELETE FROM jadwal
              WHERE tanggal = ?
            `;

            db.query(
              deleteSql,
              [tanggal],
              (deleteErr) => {

                if (deleteErr) {
                  return reject(deleteErr);
                }

                hasil.forEach((item) => {

                  db.query(
                    `
                    INSERT INTO jadwal
                    (
                      tanggal,
                      kode_perawat,
                      kode_shift,
                      cost
                    )
                    VALUES (?, ?, ?, ?)
                    `,
                    [
                      tanggal,
                      item.kode_perawat,
                      item.kode_shift,
                      item.cost,
                    ]
                  );
                });

                resolve({
                  hari,
                  tanggal,
                  totalCost,
                  hasil,
                });
              }
            );
          }
        );
      }
    );
  });
};

module.exports = {
  jalankanOptimasi,
};