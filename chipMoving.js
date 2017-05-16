function chipMoving(grid) {

  var MAX_COST = 1e7;

  var n = grid.length,
      m = grid[0].length,
      dp = [];

  for (var i = 0; i < n; i++) {
    dp.push([]);
    for (var j = 0; j < m; j++) {
      dp[i].push([MAX_COST, MAX_COST]);
    }
  }

  dp[0][0][0] = 0;
  dp[0][0][1] = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (i < n - 1) {
        dp[i + 1][j][0] = Math.min(dp[i + 1][j][0],
                                   dp[i][j][0] + grid[i + 1][j],
                                   dp[i][j][1] + grid[i + 1][j] + 10);
      }
      if (j < m - 1) {
        dp[i][j + 1][1] = Math.min(dp[i][j + 1][1],
                                   dp[i][j][1] + grid[i][j + 1],
                                   dp[i][j][0] + grid[i][j + 1] + 10);
      }
    }
  }
  console.log(dp);
  return Math.min(dp[n - 1][m - 1][0], dp[n - 1][m - 1][1]);
}

var grid1 = [
 [0, 0, 99, 99, 99], 
 [99, 0, 0, 0, 99], 
 [99, 99, 99, 0, 99], 
 [99, 99, 99, 0, 99], 
 [99, 99, 99, 0, 0]
];

chipMoving(grid1);

