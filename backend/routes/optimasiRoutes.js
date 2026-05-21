const express = require("express");
const router = express.Router();

const {
  prosesOptimasi,
} = require("../controllers/optimasiController");

// GET
router.get("/", prosesOptimasi);

// POST
router.post("/", prosesOptimasi);

module.exports = router;