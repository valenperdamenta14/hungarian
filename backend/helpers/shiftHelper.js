function createShiftSlots(shift) {
  const slots = [];

  shift.forEach((item) => {
    for (let i = 0; i < item.jumlah_shift; i++) {
      slots.push({
        kode_shift: item.kode_shift,
        nama_shift: item.nama_shift,
      });
    }
  });

  return slots;
}

function getShiftCode(namaShift) {
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
      return "L";
  }
}

function getShiftName(kodeShift) {
  switch (kodeShift) {
    case "P":
      return "Pagi";
    case "S":
      return "Sore";
    case "M":
      return "Malam";
    case "L":
      return "Libur";
    default:
      return "Libur";
  }
}

module.exports = {
  createShiftSlots,
  getShiftCode,
  getShiftName,
};