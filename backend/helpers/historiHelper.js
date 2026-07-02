const { getShiftCode } = require("./shiftHelper");

function convertJadwalToHistori(
  jadwal,
  bulan,
  tahun,
  jumlahHari
) {
  const historiMap = {};

  jadwal.forEach((item) => {
    if (!historiMap[item.kode_perawat]) {
      historiMap[item.kode_perawat] = {
        kode_perawat: item.kode_perawat,
        bulan,
        tahun,
      };

      for (let i = 1; i <= 31; i++) {
        historiMap[item.kode_perawat][
          `d${String(i).padStart(2, "0")}`
        ] = null;
      }
    }

    const hari = new Date(item.tanggal).getDate();

    historiMap[item.kode_perawat][
      `d${String(hari).padStart(2, "0")}`
    ] = getShiftCode(item.nama_shift);
  });

  Object.values(historiMap).forEach((row) => {
    for (let i = jumlahHari + 1; i <= 31; i++) {
      row[`d${String(i).padStart(2, "0")}`] = null;
    }
  });

  return Object.values(historiMap);
}

module.exports = {
  convertJadwalToHistori,
};