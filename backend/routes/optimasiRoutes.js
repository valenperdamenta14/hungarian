const express = require("express");
const router = express.Router();

const {
  prosesOptimasi,
} = require("../controllers/optimasiController");

router.get("/", prosesOptimasi);

module.exports = router;