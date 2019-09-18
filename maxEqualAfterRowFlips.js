/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let hash = {};

  for (let row of matrix) {
    let a = "",
      b = "";

    for (let i = 0; i < row.length; i++) {
      let val = row[i];

      a += val === 0 ? "x" : "o";
      b += val === 0 ? "o" : "x";
    }
    hash[a] = (hash[a] || 0) + 1;
    hash[b] = (hash[b] || 0) + 1;
  }

  return Math.max.apply(null, Object.values(hash));
};
