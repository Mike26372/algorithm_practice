/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  let dp = new Array(K + 1).fill(0).map(() => new Array(N + 1).fill(0));

  for (let i = 0; i < dp[0].length; i++) {
    dp[1][i] = i;
  }

  let c = 0;

  for (let e = 2; e <= K; e++) {
    for (let f = 1; f <= N; f++) {
      dp[e][f] = Infinity;
      for (let k = 1; k <= f; k++) {
        c = 1 + Math.max(dp[e - 1][k - 1], dp[e][f - k]);

        dp[e][f] = Math.min(c, dp[e][f]);
      }
    }
  }

  dp.forEach(col => console.log(col));

  return dp[K][N];
};

superEggDrop(2, 5);
