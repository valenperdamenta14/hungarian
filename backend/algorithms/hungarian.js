function getCost(shiftAwal, shiftTujuan) {

  if (
    (shiftAwal === "P" && shiftTujuan === "Pagi") ||
    (shiftAwal === "S" && shiftTujuan === "Sore") ||
    (shiftAwal === "M" && shiftTujuan === "Malam") ||
    (shiftAwal === "L" && shiftTujuan === "Libur")
  ) {
    return 1;
  }

  return 5;
}

function findAssignment(matrix) {

  let usedCols = [];
  let hasil = [];

  matrix.forEach((row) => {

    let minCost = Infinity;
    let selectedCol = -1;

    row.costs.forEach((cost, index) => {

      if (
        !usedCols.includes(index) &&
        cost < minCost
      ) {
        minCost = cost;
        selectedCol = index;
      }

    });

    usedCols.push(selectedCol);

    hasil.push({
      kode_perawat: row.kode_perawat,
      colIndex: selectedCol,
      cost: minCost,
    });

  });

  return hasil;
}

module.exports = {
  getCost,
  findAssignment,
};