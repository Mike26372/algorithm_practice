function minimumCostPath(cost) {
  const dp = new Array(cost.length)
    .fill(0)
    .map(col => new Array(cost[0].length).fill(0));

  dp[0][0] = cost[0][0];

  for (let i = 1; i < cost.length; i++) {
    dp[i][0] = dp[i - 1][0] + cost[i][0];
  }

  for (let j = 1; j < cost[0].length; j++) {
    dp[0][j] = dp[0][j - 1] + cost[0][j];
  }

  for (let x = 1; x < dp.length; x++) {
    for (let y = 1; y < dp[0].length; y++) {
      dp[x][y] =
        cost[x][y] +
        Math.min.apply(null, [dp[x - 1][y], dp[x][y - 1], dp[x - 1][y - 1]]);
    }
  }
  console.log(dp);

  return dp[dp.length - 1][dp[0].length - 1];
}

const test = [[1, 2, 3], [4, 8, 2], [1, 5, 3]];

const result = minimumCostPath(test);
console.log(result);
