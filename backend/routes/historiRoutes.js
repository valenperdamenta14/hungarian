const express = require("express");
const router = express.Router();

const {
  getHistori,
  getPeriode,
  getHistoriById,
  updateHistori,
  exportPDF,
} = require("../controllers/historiController");

/* ===========================
   GET
=========================== */

router.get("/", getHistori);

router.get("/periode", getPeriode);

router.get("/export", exportPDF);

router.get("/:kode", getHistoriById);

/* ===========================
   PUT
=========================== */

router.put("/:kode", updateHistori);

module.exports = router;