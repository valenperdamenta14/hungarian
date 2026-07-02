const { getCost } = require("./costHelper");

function hitungCost({
  shiftKemarin,
  shiftBaru,
  totalPagi,
  totalSore,
  totalMalam,
  totalLibur,
  grup,
  jabatan,
  hari,
}) {
  let cost = getCost(
    shiftKemarin,
    shiftBaru
  );

  if (
    shiftKemarin === "M" &&
    shiftBaru === "Pagi"
  ) {
    return 999;
  }

  const totalShift =
    totalPagi +
    totalSore +
    totalMalam +
    totalLibur;

  if (totalShift > 0) {
    const rata =
      totalShift / 4;

    switch (shiftBaru) {
      case "Pagi":
        if (totalPagi > rata) {
          cost += totalPagi - rata;
        }
        break;

      case "Sore":
        if (totalSore > rata) {
          cost += totalSore - rata;
        }
        break;

      case "Malam":
        if (totalMalam > rata) {
          cost += totalMalam - rata;
        }
        break;

      case "Libur":
        if (totalLibur > rata) {
          cost += totalLibur - rata;
        }
        break;
    }
  }

  if (
    jabatan &&
    jabatan.toLowerCase().includes("kepala")
  ) {
    if (shiftBaru === "Malam") {
      cost += 5;
    }
  }

  if (
    grup &&
    grup.toUpperCase() === "A"
  ) {
    if (
      hari % 7 === 0 &&
      shiftBaru === "Libur"
    ) {
      cost -= 1;
    }
  }

  if (cost < 1) {
    cost = 1;
  }

  return Math.round(cost);
}

module.exports = {
  hitungCost,
};