function getCost(shiftTerakhir, shiftTujuan) {

  // rotasi ideal
  if (
    (shiftTerakhir === "Pagi" && shiftTujuan === "Sore") ||
    (shiftTerakhir === "Sore" && shiftTujuan === "Malam") ||
    (shiftTerakhir === "Malam" && shiftTujuan === "Libur") ||
    (shiftTerakhir === "Libur" && shiftTujuan === "Pagi")
  ) {
    return 1;
  }

  // shift sama
  if (shiftTerakhir === shiftTujuan) {
    return 3;
  }

  // larangan
  if (shiftTerakhir === "Malam" && shiftTujuan === "Pagi") {
    return 99;
  }

  // selain itu
  return 7;
}

function findAssignment(matrix) {

  let usedCols = [];
  let results = [];

  matrix.forEach((rowData) => {

    let minCost = Infinity;
    let selectedCol = -1;

    rowData.costs.forEach((cost, colIndex) => {

      if (!usedCols.includes(colIndex)) {

        if (cost < minCost) {
          minCost = cost;
          selectedCol = colIndex;
        }

      }

    });

    usedCols.push(selectedCol);

    results.push({
      perawat: rowData.perawat,
      colIndex: selectedCol,
      cost: minCost,
    });

  });

  return results;
}

module.exports = {
  getCost,
  findAssignment,
};