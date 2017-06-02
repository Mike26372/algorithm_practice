function squaresUnderQueenAttack(n, queens, queries) {
  return queries.map(query => !isUnderAttack(query, queens));
}

function isUnderAttack(query, queens) {
  var row = query[0];
  var col = query[1];
  
  for (var i = 0; i < queens.length; i++) {
    if (row === queens[i][0]) return false;
    if (col === queens[i][1]) return false;
    if (row + col === queens[i][0] + queens[i][1]) return false;
    if (row - col === queens[i][0] - queens[i][1]) return false;
  }
  return true;
}