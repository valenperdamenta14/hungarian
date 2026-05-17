const db = require("../config/db");

exports.getJadwal = (req, res) => {

  const sql = `
    SELECT
      jadwal.id,
      jadwal.tanggal,
      jadwal.shift_hasil,
      jadwal.cost,
      perawat.nama_perawat
    FROM jadwal
    JOIN perawat
    ON jadwal.id_perawat = perawat.id_perawat
    ORDER BY jadwal.id DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);

  });

};