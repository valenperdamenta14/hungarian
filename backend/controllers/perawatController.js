const db = require("../config/db");


exports.getPerawat = (req, res) => {
  const sql = `
    SELECT *
    FROM perawat
    ORDER BY kode_perawat
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};


exports.tambahPerawat = (req, res) => {
  const {
    kode_perawat,
    nama_perawat,
    grup,
    jabatan,
  } = req.body;

  const sql = `
    INSERT INTO perawat
    (
      kode_perawat,
      nama_perawat,
      grup,
      jabatan
    )
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      kode_perawat,
      nama_perawat,
      grup,
      jabatan,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Perawat berhasil ditambahkan",
      });
    }
  );
};


exports.updatePerawat = (req, res) => {
  const { kode } = req.params;

  const {
    nama_perawat,
    grup,
    jabatan,
  } = req.body;

  const sql = `
    UPDATE perawat
    SET
      nama_perawat=?,
      grup=?,
      jabatan=?
    WHERE kode_perawat=?
  `;

  db.query(
    sql,
    [
      nama_perawat,
      grup,
      jabatan,
      kode,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Perawat berhasil diupdate",
      });
    }
  );
};


exports.deletePerawat = (req, res) => {
  const { kode } = req.params;

  const sql = `
    DELETE FROM perawat
    WHERE kode_perawat=?
  `;

  db.query(sql, [kode], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Perawat berhasil dihapus",
    });
  });
};