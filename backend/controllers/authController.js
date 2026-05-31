const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { username, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE username = ?";

  db.query(sql, [username], async (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        message: "Username tidak ditemukan",
      });
    }

    const user = result[0];

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {
      return res.status(401).json({
        message: "Password salah",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user.id,
        nama: user.nama,
        username: user.username,
        role: user.role,
      },
    });
  });
};

// ==========================
// GET ALL USER
// ==========================
exports.getUsers = (req, res) => {
  const sql = `
    SELECT
      id,
      nama,
      username,
      role,
      created_at
    FROM users
    ORDER BY id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

// ==========================
// TAMBAH USER
// ==========================
exports.createUser = async (req, res) => {
  const {
    nama,
    username,
    password,
    role,
  } = req.body;

  try {
    const hash =
      await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO users
      (nama, username, password, role)
      VALUES (?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        nama,
        username,
        hash,
        role || "admin",
      ],
      (err) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.json({
          message:
            "User berhasil ditambahkan",
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// HAPUS USER
// ==========================
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM users WHERE id=?",
    [id],
    (err) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message:
          "User berhasil dihapus",
      });
    }
  );
};