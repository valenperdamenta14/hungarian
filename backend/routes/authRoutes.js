const express = require("express");
const router = express.Router();

const {
  login,
  getUsers,
  deleteUser,
  createUser,
} = require("../controllers/authController");

router.post("/login", login);
router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

module.exports = router;