function repairAssignment(assignment) {
  const hasil = assignment.map((item) => ({ ...item }));

  let berubah = true;

  while (berubah) {
    berubah = false;

    for (let i = 0; i < hasil.length; i++) {
      if (hasil[i].valid) continue;

      for (let j = 0; j < hasil.length; j++) {
        if (i === j) continue;

        if (!hasil[j].valid) continue;

        if (
          hasil[i].kode_shift ===
          hasil[j].kode_shift
        ) {
          continue;
        }

        const kodeShift = hasil[i].kode_shift;
        const namaShift = hasil[i].nama_shift;

        hasil[i].kode_shift = hasil[j].kode_shift;
        hasil[i].nama_shift = hasil[j].nama_shift;

        hasil[j].kode_shift = kodeShift;
        hasil[j].nama_shift = namaShift;

        hasil[i].valid = true;
        hasil[i].alasan = "-";

        berubah = true;
        break;
      }
    }
  }

  return hasil;
}

module.exports = {
  repairAssignment,
};