/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  let dp = new Array(T.length).fill(0).map(col => new Array(S.length).fill(0));

  dp[0][0] = S[0] === T[0] ? 0 : -1;

  for (let i = 1; i < dp[0].length; i++) {
    if (S[i] === T[0]) {
      dp[0][i] = i;
    } else {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (let j = 1; j < dp.length; j++) {
    dp[j][0] = -1;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (T[i] === S[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  let start = 0,
    len = Infinity;

  for (let j = 0; j < dp[0].length; j++) {
    if (dp[dp.length - 1][j] !== -1) {
      let currentLength = j - dp[dp.length - 1][j] + 1;
      if (currentLength < len) {
        start = dp[dp.length - 1][j];
        len = currentLength;
      }
    }
  }

  return len === Infinity ? "" : S.substring(start, start + len);
};
