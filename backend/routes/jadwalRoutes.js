const express = require("express");
const router = express.Router();

const {
  getJadwal,
} = require("../controllers/jadwalController");

router.get("/", getJadwal);

module.exports = router;