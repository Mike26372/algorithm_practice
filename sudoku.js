function sudoku(grid) {
  for (var i = 0; i < grid.length; i++) {
    if (!checkRow(i, grid)) return false;
    if (!checkColumn(i, grid)) return false;
  }
    
  for (var j = 0; j < grid.length; j += 3) {
    for (var k = 0; k < grid.length; k += 3) {
      if (!check3x3(j, k, grid)) return false;
    }
  }
  return true;
}

function checkRow(row, grid) {
  var visited = {};
  for (var i = 0; i < grid[row].length; i++) {
    var curr = grid[row][i];
    if (curr === '.') continue;
    if (visited.hasOwnProperty(curr)) {
      return false;
    } else {
      visited[curr] = 1;
    }
  }
  return true;
}

function checkColumn(col, grid) {
  var visited = {};
  for (var i = 0; i < grid.length; i++) {
    var curr = grid[i][col];
    if (curr === '.') continue;
    if (visited.hasOwnProperty(curr)) {
      return false;
    } else {
      visited[curr] = 1;
    }
  }
  return true;
}

function check3x3 (row, col, grid) {
  var visited = {};
  for (var i = row; i < row + 3; i++) {
    for (var j = col; j < col + 3; j++) {
      var curr = grid[i][j];
      if (curr === '.') continue;
      if (visited.hasOwnProperty(curr)) {
        return false;
      } else {
        visited[curr] = 1;
      }
    }
  }
  return true;
}