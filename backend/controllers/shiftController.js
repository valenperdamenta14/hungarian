const db = require("../config/db");

exports.getShift = (req, res) => {

  const sql = "SELECT * FROM shift";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);

  });

};