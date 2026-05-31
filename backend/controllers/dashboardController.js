const db = require("../config/db");

exports.getDashboard = async (req, res) => {
  try {
    const [perawat] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS total FROM perawat"
      );

    const [shift] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS total FROM shift"
      );

    const [histori] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS total FROM histori_shift"
      );

    const [user] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS total FROM users"
      );

    res.json({
      totalPerawat: perawat[0].total,
      totalShift: shift[0].total,
      totalHistori: histori[0].total,
      totalUser: user[0].total,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil dashboard",
    });
  }
};