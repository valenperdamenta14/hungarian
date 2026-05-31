const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/dashboard",require("./routes/dashboardRoutes"));
app.use("/api/perawat", require("./routes/perawatRoutes"));
app.use("/api/shift", require("./routes/shiftRoutes"));
app.use("/api/histori", require("./routes/historiRoutes"));
app.use("/api/jadwal", require("./routes/jadwalRoutes"));
app.use("/api/optimasi", require("./routes/optimasiRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});