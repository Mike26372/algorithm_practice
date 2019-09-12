function nQueens(n) {
  var result = [];
  
  var generateSolutions = function(queens) {
    if (queens.length === n) {
      result.push(queens.map(val => val + 1));
      return;
    }
    var currentRow = queens.length;
    for (var i = 0; i < n; i++) {
      if (isAvailable(queens, currentRow, i)) {
        var temp = queens.slice();
        temp.push(i);
        generateSolutions(temp);
      }
    }
  };
    
  generateSolutions([]);
  return result.sort(lexicographicalSort);
}

function isAvailable(queens, row, col) {
  var rightDiag = row + col;
  var leftDiag = row - col;
  
  for (var i = 0; i < queens.length; i++) {
    var queenCol = queens[i];
    var queenRow = i;
    
    // if (queenRow === row) return false;
    if (queenCol === col) return false;
    if (queenRow + queenCol === rightDiag) return false;
    if (queenRow - queenCol === leftDiag) return false;
  }
  return true;
}

function lexicographicalSort(a, b) {
  for (var i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] === b[i]) continue;
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }
  return a.length < b.length ? -1 : 1;
}

console.log(nQueens(5))
