const express = require("express");
const router = express.Router();

const {
  getJadwal,
  getJadwalHarian,
  getJadwalMingguan,
  getJadwalBulanan,
  getSummary,
  getRekapBulanan,
} = require("../controllers/jadwalController");

router.get("/", getJadwal);
router.get("/harian", getJadwalHarian);
router.get("/mingguan", getJadwalMingguan);
router.get("/bulanan", getJadwalBulanan);
router.get("/summary", getSummary);
router.get("/rekap", getRekapBulanan);

module.exports = router;