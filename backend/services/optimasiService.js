const db = require("../config/db");

const {
  getCost,
  findAssignment,
} = require("../algorithms/hungarian");

const jalankanOptimasi = () => {

  return new Promise((resolve, reject) => {

    // =========================
    // AMBIL DATA PERAWAT
    // =========================

    db.query("SELECT * FROM perawat", (err, perawat) => {

      if (err) {
        return reject(err);
      }

      // =========================
      // AMBIL DATA SHIFT
      // =========================

      db.query("SELECT * FROM shift", (err2, shift) => {

        if (err2) {
          return reject(err2);
        }

        // =========================
        // BUAT SLOT SHIFT
        // =========================

        let slotShift = [];

        shift.forEach((s) => {

          for (let i = 1; i <= s.jumlah_shift; i++) {
            slotShift.push(s.nama_shift);
          }

        });

        // =========================
        // BENTUK MATRIX COST
        // =========================

        let matrix = [];

        perawat.forEach((p) => {

          let row = [];

          slotShift.forEach((slot) => {

            const cost = getCost(
              p.shift_terakhir,
              slot
            );

            row.push(cost);

          });

          matrix.push({
            perawat: p.nama_perawat,
            costs: row,
          });

        });

        // =========================
        // PROSES ASSIGNMENT
        // =========================

        const assignment = findAssignment(matrix);

        // =========================
        // HASIL ASSIGNMENT
        // =========================

        const hasil = assignment.map((a) => ({
          perawat: a.perawat,
          shift: slotShift[a.colIndex],
          cost: a.cost,
        }));

        // =========================
        // HITUNG TOTAL COST
        // =========================

        const totalCost = hasil.reduce(
          (sum, item) => sum + item.cost,
          0
        );

        // =========================
        // HAPUS JADWAL LAMA
        // =========================

        db.query("DELETE FROM jadwal", (deleteErr) => {

          if (deleteErr) {
            return reject(deleteErr);
          }

          // =========================
          // SIMPAN JADWAL BARU
          // =========================

          hasil.forEach((item) => {

            const dataPerawat = perawat.find(
              (p) => p.nama_perawat === item.perawat
            );

            // =========================
            // INSERT JADWAL
            // =========================

            const insertSql = `
              INSERT INTO jadwal
              (tanggal, id_perawat, shift_hasil, cost)
              VALUES (?, ?, ?, ?)
            `;

            db.query(insertSql, [
              new Date(),
              dataPerawat.id_perawat,
              item.shift,
              item.cost,
            ]);

            // =========================
            // UPDATE SHIFT TERAKHIR
            // =========================

            const updateSql = `
              UPDATE perawat
              SET shift_terakhir = ?
              WHERE id_perawat = ?
            `;

            db.query(updateSql, [
              item.shift,
              dataPerawat.id_perawat,
            ]);

          });

          // =========================
          // RESPONSE HASIL
          // =========================

          resolve({
            slotShift,
            matrix,
            hasil,
            totalCost,
          });

        });

      });

    });

  });

};

module.exports = {
  jalankanOptimasi,
};