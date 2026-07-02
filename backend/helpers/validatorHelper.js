function validateAssignment(
  assignment,
  historiMap
) {
  return assignment.map((item) => {
    const histori =
      historiMap[item.kode_perawat] || [];

    const shiftKemarin =
      histori.length > 0
        ? histori[histori.length - 1]
        : "L";

    let valid = true;
    let alasan = "-";

    if (
      shiftKemarin === "M" &&
      item.nama_shift === "Pagi"
    ) {
      valid = false;
      alasan =
        "Shift Malam tidak boleh langsung Pagi";
    }

    return {
      ...item,
      valid,
      alasan,
    };
  });
}

module.exports = {
  validateAssignment,
};