const express = require("express");
const router = express.Router();

const {
  prosesOptimasi,
} = require("../controllers/optimasiController");

router.get("/", prosesOptimasi);
router.post("/", prosesOptimasi);

module.exports = router;