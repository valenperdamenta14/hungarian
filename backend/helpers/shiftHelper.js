/*
===========================================
SHIFT HELPER
===========================================
*/

const createShiftSlots = (shiftData) => {
  const slotShift = [];
  shiftData.forEach((shift) => {
    for (let i = 0; i < shift.jumlah_shift; i++) {
      slotShift.push({
        kode_shift: shift.kode_shift,
        nama_shift: shift.nama_shift,
      });
    }
  });

  return slotShift;
};

/*
===========================================
MENGUBAH NAMA SHIFT
Pagi -> P
===========================================
*/

const getShiftCode = (namaShift) => {
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
      return null;
  }

};

/*
===========================================
MENGUBAH KODE SHIFT
P -> Pagi
===========================================
*/

const getShiftName = (kodeShift) => {
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
      return null;
  }
};

module.exports = {
  createShiftSlots,
  getShiftCode,
  getShiftName,
};