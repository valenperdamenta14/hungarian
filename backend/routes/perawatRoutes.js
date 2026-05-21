const express = require("express");
const router = express.Router();

const {
  getPerawat,
  tambahPerawat,
  updatePerawat,
  deletePerawat,
} = require("../controllers/perawatController");

router.get("/", getPerawat);
router.post("/", tambahPerawat);
router.put("/:kode", updatePerawat);
router.delete("/:kode", deletePerawat);

module.exports = router;