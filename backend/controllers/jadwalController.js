const db = require("../config/db");

// ==========================
// GET SEMUA JADWAL
// ==========================

exports.getJadwal = (req, res) => {
  const sql = `
    SELECT
      j.*,
      p.nama_perawat,
      s.nama_shift
    FROM jadwal j
    JOIN perawat p
      ON p.kode_perawat = j.kode_perawat
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    ORDER BY j.tanggal DESC
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

// ==========================
// JADWAL HARIAN
// ==========================

exports.getJadwalHarian = (req, res) => {
  const { tanggal } = req.query;

  if (!tanggal) {
    return res.status(400).json({
      message: "Parameter tanggal wajib diisi",
    });
  }

  const sql = `
    SELECT
      j.tanggal,
      p.kode_perawat,
      p.nama_perawat,
      s.nama_shift,
      j.cost
    FROM jadwal j
    JOIN perawat p
      ON p.kode_perawat = j.kode_perawat
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    WHERE DATE(j.tanggal) = ?
    ORDER BY p.kode_perawat
  `;

  db.query(sql, [tanggal], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

// ==========================
// JADWAL MINGGUAN
// ==========================

exports.getJadwalMingguan = (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({
      message: "Parameter start dan end wajib diisi",
    });
  }

  const sql = `
    SELECT
      j.tanggal,
      p.kode_perawat,
      p.nama_perawat,
      s.nama_shift,
      j.cost
    FROM jadwal j
    JOIN perawat p
      ON p.kode_perawat = j.kode_perawat
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    WHERE DATE(j.tanggal) BETWEEN ? AND ?
    ORDER BY p.kode_perawat, j.tanggal
  `;

  db.query(sql, [start, end], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

// ==========================
// JADWAL BULANAN
// ==========================

exports.getJadwalBulanan = (req, res) => {
  const { bulan, tahun } = req.query;

  if (!bulan || !tahun) {
    return res.status(400).json({
      message: "Parameter bulan dan tahun wajib diisi",
    });
  }

  const sql = `
    SELECT
      j.tanggal,
      p.kode_perawat,
      p.nama_perawat,
      s.nama_shift,
      j.cost
    FROM jadwal j
    JOIN perawat p
      ON p.kode_perawat = j.kode_perawat
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    WHERE MONTH(j.tanggal) = ?
      AND YEAR(j.tanggal) = ?
    ORDER BY p.kode_perawat, j.tanggal
  `;

  db.query(sql, [bulan, tahun], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

// ==========================
// SUMMARY SHIFT
// ==========================

exports.getSummary = (req, res) => {
  const sql = `
    SELECT
      s.nama_shift,
      COUNT(*) AS total
    FROM jadwal j
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    GROUP BY s.nama_shift
    ORDER BY s.nama_shift
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

// ==========================
// REKAP BULANAN
// ==========================

exports.getRekapBulanan = (req, res) => {

  const { bulan, tahun } = req.query;

  if (!bulan || !tahun) {
    return res.status(400).json({
      message: "Parameter bulan dan tahun wajib diisi",
    });
  }

  const sql = `
    SELECT
      p.kode_perawat,
      p.nama_perawat,
      DAY(j.tanggal) AS hari,
      s.nama_shift
    FROM jadwal j
    JOIN perawat p
      ON p.kode_perawat = j.kode_perawat
    JOIN shift s
      ON s.kode_shift = j.kode_shift
    WHERE MONTH(j.tanggal) = ?
      AND YEAR(j.tanggal) = ?
    ORDER BY p.kode_perawat, j.tanggal
  `;

  db.query(sql, [bulan, tahun], (err, rows) => {

    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    const rekap = {};

    rows.forEach((row) => {

      if (!rekap[row.kode_perawat]) {

        rekap[row.kode_perawat] = {
          kode_perawat: row.kode_perawat,
          nama_perawat: row.nama_perawat,
        };

        for (let i = 1; i <= 31; i++) {
          rekap[row.kode_perawat][
            `d${String(i).padStart(2, "0")}`
          ] = "";
        }

      }

      let kodeShift = "";

      switch (row.nama_shift) {
        case "Pagi":
          kodeShift = "P";
          break;

        case "Sore":
          kodeShift = "S";
          break;

        case "Malam":
          kodeShift = "M";
          break;

        case "Libur":
          kodeShift = "L";
          break;
      }

      rekap[row.kode_perawat][
        `d${String(row.hari).padStart(2, "0")}`
      ] = kodeShift;

    });

    res.json(
      Object.values(rekap)
    );

  });

};