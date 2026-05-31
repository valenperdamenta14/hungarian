const db = require("../config/db");


exports.getHistori = (req, res) => {
  const sql = `
    SELECT
      h.*,
      p.nama_perawat
    FROM histori_shift h
    JOIN perawat p
      ON p.kode_perawat = h.kode_perawat
    ORDER BY h.kode_perawat
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};


exports.getHistoriById = (req, res) => {
  const { kode } = req.params;

  const sql = `
    SELECT *
    FROM histori_shift
    WHERE kode_perawat = ?
  `;

  db.query(sql, [kode], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);
  });
};


exports.updateHistori = (req, res) => {
  const { kode } = req.params;

  const data = req.body;

  const sql = `
    UPDATE histori_shift
    SET
      d01=?, d02=?, d03=?, d04=?, d05=?,
      d06=?, d07=?, d08=?, d09=?, d10=?,
      d11=?, d12=?, d13=?, d14=?, d15=?,
      d16=?, d17=?, d18=?, d19=?, d20=?,
      d21=?, d22=?, d23=?, d24=?, d25=?,
      d26=?, d27=?, d28=?, d29=?, d30=?, d31=?
    WHERE kode_perawat=?
  `;

  db.query(
    sql,
    [
      data.d01,
      data.d02,
      data.d03,
      data.d04,
      data.d05,
      data.d06,
      data.d07,
      data.d08,
      data.d09,
      data.d10,
      data.d11,
      data.d12,
      data.d13,
      data.d14,
      data.d15,
      data.d16,
      data.d17,
      data.d18,
      data.d19,
      data.d20,
      data.d21,
      data.d22,
      data.d23,
      data.d24,
      data.d25,
      data.d26,
      data.d27,
      data.d28,
      data.d29,
      data.d30,
      data.d31,
      kode,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Histori berhasil diupdate",
      });
    }
  );
};