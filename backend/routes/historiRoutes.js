const express = require("express");
const router = express.Router();

const {
  getHistori,
  getHistoriById,
  updateHistori,
} = require("../controllers/historiController");

router.get("/", getHistori);
router.get("/:kode", getHistoriById);
router.put("/:kode", updateHistori);

module.exports = router;