function matrixElementsInSpiralOrder(matrix) {
  'use strict';
  if (matrix.length < 1) return [];
  let minX = 0;
  let minY = 0;
  let maxX = matrix[0].length - 1;
  let maxY = matrix.length - 1;
  let total = (maxY + 1) * (maxX + 1);
  let result = [];
  while (minX <= maxX && minY <= maxY) {
    for (let i = minX; i <= maxX; i++ ) {
      result.push(matrix[minY][i]);
      // if (result.length === total) return result;
    }
    minY++;
    for (let j = minY; j <= maxY; j++) {
      result.push(matrix[j][maxX]);
      // if (result.length === total) return result;
    }
    maxX--;
    for (let k = maxX; k >= minX; k--) {
      result.push(matrix[maxY][k]);
      // if (result.length === total) return result;
    }
    maxY--;
    for (let l = maxY; l >= minY; l--) {
      result.push(matrix[l][minX]);
      // if (result.length === total) return result;
    }
    minX++;
  }
  return result;
}

var test = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];
var ans = matrixElementsInSpiralOrder(test);
console.log(ans);
