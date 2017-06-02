// Given an MxN matrix, write code which prints out the diagonals (from upper right to lower left) of the matrix.
// In this example where M = 4, N = 3:
// [[9 3 2] 
//  [8 6 1] 
//  [5 5 6]
//  [1 2 8]]


// Your code should print out
// 9
// 3 8
// 2 6 5
// 1 5 1
// 6 2
// 8

function printDiagonals(arr) {
  var rowLength = arr[0].length;
  var colLength = arr.length;
  
  for (var i = 0; i < rowLength; i++) {
    printDiagonal(0, i, arr);
  }
  
  for (var j = 1; j < colLength; j++) {
    printDiagonal(j, rowLength - 1, arr);
  }
}

function printDiagonal(col, row, arr) {
  result = [];
  while (col < arr.length && row >= 0) {
    result.push(arr[col][row])
    col++;
    row--;
  }
  console.log(result.join(' '));
  return result.join(' ')
}

/*
Your code is supplied with a large list of cities (arbitrary strings) and populations (arbitrary positive floats).

Sample data:
NYC - 10
SF - 0.9
London - 6

We want to write a `randomCity()` function which randomly returns a city each time it's called, such that the probability of returning a given city is proportional to that city's population.
For example, with the sample data above, the probability of returning "NYC" is 10 / 16.9 (as 10 would be the population of NYC and 16.9 is the total population).
*/