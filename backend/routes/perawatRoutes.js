const express = require("express");
const router = express.Router();

const {
  getPerawat,
  tambahPerawat,
} = require("../controllers/perawatController");

router.get("/", getPerawat);
router.post("/", tambahPerawat);

module.exports = router;