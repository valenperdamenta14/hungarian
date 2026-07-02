const COST_MATRIX = {
  P: {
    Pagi: 4,
    Sore: 1,
    Malam: 5,
    Libur: 3,
  },

  S: {
    Pagi: 5,
    Sore: 4,
    Malam: 1,
    Libur: 3,
  },

  M: {
    Pagi: 999,
    Sore: 5,
    Malam: 4,
    Libur: 1,
  },

  L: {
    Pagi: 1,
    Sore: 3,
    Malam: 5,
    Libur: 4,
  },
};

function getCost(shiftAwal, shiftBaru) {
  if (!COST_MATRIX[shiftAwal]) {
    return 999;
  }

  if (COST_MATRIX[shiftAwal][shiftBaru] === undefined) {
    return 999;
  }

  return COST_MATRIX[shiftAwal][shiftBaru];
}

module.exports = {
  getCost,
};