const db = require("../config/db");
const PDFDocument = require("pdfkit");

/* ===========================================
   GET HISTORI
=========================================== */
exports.getHistori = (req, res) => {
  const { bulan, tahun } = req.query;

  let sql = `
    SELECT
      h.*,
      p.nama_perawat
    FROM histori_shift h
    JOIN perawat p
      ON p.kode_perawat = h.kode_perawat
  `;

  const params = [];

  if (bulan && tahun) {
    sql += `
      WHERE h.bulan = ?
      AND h.tahun = ?
    `;

    params.push(bulan, tahun);
  }

  sql += `
    ORDER BY h.kode_perawat
  `;

  db.query(sql, params, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

/* ===========================================
   GET PERIODE
=========================================== */
exports.getPeriode = (req, res) => {
  const sql = `
    SELECT DISTINCT
      bulan,
      tahun
    FROM histori_shift
    ORDER BY tahun DESC, bulan DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

/* ===========================================
   GET HISTORI BY ID
=========================================== */
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

/* ===========================================
   UPDATE HISTORI
=========================================== */
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

/* ===========================================
   EXPORT PDF
=========================================== */
exports.exportPDF = (req, res) => {
  const { bulan, tahun } = req.query;

  const sql = `
    SELECT
      h.*,
      p.nama_perawat
    FROM histori_shift h
    JOIN perawat p
      ON p.kode_perawat = h.kode_perawat
    WHERE h.bulan = ?
    AND h.tahun = ?
    ORDER BY h.kode_perawat
  `;

  db.query(sql, [bulan, tahun], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margin: 30,
    });

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Histori_Shift_${bulan}_${tahun}.pdf`
    );

    doc.pipe(res);

    /* ==========================
       HEADER
    ========================== */

    doc
      .fontSize(18)
      .text("LAPORAN HISTORI SHIFT PERAWAT", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(12)
      .text(`Periode : ${bulan}/${tahun}`, {
        align: "center",
      });

    doc.moveDown(2);

    /* ==========================
       HEADER TABLE
    ========================== */

    let startY = 120;

    doc.fontSize(8);

    doc.text("Kode", 30, startY);
    doc.text("Nama", 90, startY);

    let posisiHari = 220;

    for (let i = 1; i <= 31; i++) {
      doc.text(i, posisiHari, startY, {
        width: 12,
        align: "center",
      });

      posisiHari += 14;
    }

    doc
      .moveTo(30, startY + 15)
      .lineTo(810, startY + 15)
      .stroke();

    /* ==========================
       DATA
    ========================== */

    let y = startY + 25;

    result.forEach((row) => {
      doc.text(row.kode_perawat, 30, y);

      doc.text(row.nama_perawat, 90, y, {
        width: 120,
      });

      let x = 220;

      for (let i = 1; i <= 31; i++) {
        const shift =
          row[`d${String(i).padStart(2, "0")}`] || "-";

        doc.text(shift, x, y, {
          width: 12,
          align: "center",
        });

        x += 14;
      }

      y += 20;

      /* Jika halaman penuh */

      if (y > 540) {
        doc.addPage({
          layout: "landscape",
        });

        y = 40;
      }
    });

    /* ==========================
       FOOTER
    ========================== */

    doc.moveDown();

    doc.fontSize(10);

    doc.text(
      `Tanggal Cetak : ${new Date().toLocaleDateString("id-ID")}`,
      30,
      y + 20
    );

    doc.end();
  });
};