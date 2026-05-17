const db = require("../config/db");

exports.getPerawat = (req, res) => {

  const sql = "SELECT * FROM perawat";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);

  });

};

exports.tambahPerawat = (req, res) => {

  const {
    id_perawat,
    nama_perawat,
    shift_terakhir,
  } = req.body;

  const sql = `
    INSERT INTO perawat
    (id_perawat, nama_perawat, shift_terakhir)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [id_perawat, nama_perawat, shift_terakhir],
    (err) => {

      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message: "Perawat berhasil ditambahkan",
      });

    }
  );

};