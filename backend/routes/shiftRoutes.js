const express = require("express");
const router = express.Router();

const {
  getShift,
} = require("../controllers/shiftController");

router.get("/", getShift);

module.exports = router;