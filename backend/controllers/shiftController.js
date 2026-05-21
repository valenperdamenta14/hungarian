const db = require("../config/db");

// GET ALL
exports.getShift = (req, res) => {
  const sql = `
    SELECT *
    FROM shift
    ORDER BY kode_shift
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// POST
exports.tambahShift = (req, res) => {
  const {
    kode_shift,
    nama_shift,
    jumlah_shift,
  } = req.body;

  const sql = `
    INSERT INTO shift
    (
      kode_shift,
      nama_shift,
      jumlah_shift
    )
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      kode_shift,
      nama_shift,
      jumlah_shift,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Shift berhasil ditambahkan",
      });
    }
  );
};

// UPDATE
exports.updateShift = (req, res) => {
  const { kode } = req.params;

  const {
    nama_shift,
    jumlah_shift,
  } = req.body;

  const sql = `
    UPDATE shift
    SET
      nama_shift=?,
      jumlah_shift=?
    WHERE kode_shift=?
  `;

  db.query(
    sql,
    [
      nama_shift,
      jumlah_shift,
      kode,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Shift berhasil diupdate",
      });
    }
  );
};

// DELETE
exports.deleteShift = (req, res) => {
  const { kode } = req.params;

  const sql = `
    DELETE FROM shift
    WHERE kode_shift=?
  `;

  db.query(sql, [kode], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Shift berhasil dihapus",
    });
  });
};