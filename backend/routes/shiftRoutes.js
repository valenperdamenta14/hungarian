const express = require("express");
const router = express.Router();

const {
  getShift,
  tambahShift,
  updateShift,
  deleteShift,
} = require("../controllers/shiftController");

router.get("/", getShift);
router.post("/", tambahShift);
router.put("/:kode", updateShift);
router.delete("/:kode", deleteShift);

module.exports = router;