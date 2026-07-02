const { Munkres } = require("munkres-js");

const munkres = new Munkres();

function findAssignment(matrix) {

  if (!matrix || matrix.length === 0) {
    return [];
  }

  const costMatrix = matrix.map(
    (row) => row.costs
  );

  const indexes =
    munkres.compute(costMatrix);

  const hasil = indexes.map(
    ([row, col]) => {

      return {

        kode_perawat:
          matrix[row].kode_perawat,

        nama_perawat:
          matrix[row].nama_perawat,

        colIndex:
          col,

        cost:
          costMatrix[row][col],

      };

    }
  );

  hasil.sort((a, b) =>
    a.kode_perawat.localeCompare(
      b.kode_perawat
    )
  );

  return hasil;

}

module.exports = {

  findAssignment,

};