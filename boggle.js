function boggle(grid, dictionary) {
  var words = new Set();
  var dictSet = new Set(dictionary);
  var len = grid.length;

  var check = new Array(grid.length).fill(0).map(col => new Array(grid.length).fill(false));
  var findWords = function(col, row, current = '') {
    if (!isWithinGrid(col, row, len)) {
      return;
    }

    if (dictSet.has(current)) {
      words.add(current);
    }

    if (!check[col][row]) {
      check[col][row] = true;
      var temp = current;
      temp += grid[col][row];
      for (var x = col - 1; x <= col + 1; x++) {
        for (var y = row - 1; y <= row + 1; y++) {
          if (x === col && y === row) {
            continue;
          }
          findWords(x, y, temp);
        }
      }
      check[col][row] = false;
    }
  };
  
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      findWords(i, j);
    }
  }

  return words;
}

function isWithinGrid(col, row, length) {
  return (col < length && col >= 0) && (row < length && row >= 0);
}

var grid = [
  ['c', 'a', 't'],
  ['r', 'r', 'e'],
  ['t', 'o', 'n']
];

var dictionary = ['cat', 'cater', 'art', 'toon', 'moon', 'not', 'eat', 'ton'];

var ans = boggle(grid, dictionary);
console.log(ans); // not, cat, art, cater, ton, eat

