const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hungarian_pegawai",
  charset: "utf8mb4",
});

db.connect((err) => {
  if (err) {
    console.log("Database gagal konek");
    console.log(err.message);
  } else {
    console.log("Database terkoneksi");
  }
});

module.exports = db;