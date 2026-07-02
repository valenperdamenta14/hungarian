const { Munkres } = require("munkres-js");
const munkres = new Munkres();

function getCost(shiftAwal, shiftBaru) {
  if (
    (shiftAwal === "P" && shiftBaru === "Pagi") ||
    (shiftAwal === "S" && shiftBaru === "Sore") ||
    (shiftAwal === "M" && shiftBaru === "Malam") ||
    (shiftAwal === "L" && shiftBaru === "Libur")
  ) {
    return 1;
  }

  if (
    shiftAwal === "M" &&
    shiftBaru === "Pagi"
  ) {
    return 100;
  }

  if (
    shiftAwal === "P" &&
    shiftBaru === "Malam"
  ) {
    return 40;
  }

  if (
    shiftAwal === "S" &&
    shiftBaru === "Pagi"
  ) {
    return 20;
  }

  return 5;
}

function findAssignment(matrix) {
  const costMatrix = matrix.map((r) => r.costs);
  const indexes = munkres.compute(costMatrix);
  const hasil = indexes.map(([row, col]) => ({
    kode_perawat: matrix[row].kode_perawat,
    colIndex: col,
    cost: costMatrix[row][col],
  }));
  return hasil;
}

module.exports = {
  getCost,
  findAssignment,
};