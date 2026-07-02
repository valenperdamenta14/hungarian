function getKodeShift(namaShift) {
  switch (namaShift) {
    case "Pagi":
      return "P";
    case "Sore":
      return "S";
    case "Malam":
      return "M";
    case "Libur":
      return "L";
    default:
      return "";
  }
}

function convertJadwalToHistori(
  jadwal,
  bulan,
  tahun,
  jumlahHari
) {
  const histori = {};
  jadwal.forEach((item) => {
    if (!histori[item.kode_perawat]) {
      histori[item.kode_perawat] = {
        kode_perawat: item.kode_perawat,
        bulan,
        tahun,
      };

      // isi semua hari menjadi NULL
      for (let i = 1; i <= 31; i++) {
        histori[item.kode_perawat][
          `d${String(i).padStart(2, "0")}`
        ] = null;
      }
    }

    const tanggal = new Date(item.tanggal);
    const hari = tanggal.getDate();

    histori[item.kode_perawat][
      `d${String(hari).padStart(2, "0")}`
    ] = getKodeShift(item.nama_shift);
  });

  // kosongkan hari yang tidak ada pada bulan tsb
  Object.values(histori).forEach((row) => {
    for (
      let i = jumlahHari + 1;
      i <= 31;
      i++
    ) {
      row[
        `d${String(i).padStart(2, "0")}`
      ] = null;
    }
  });

  return Object.values(histori);
}

module.exports = {
  convertJadwalToHistori,
};