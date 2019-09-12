/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let n = s.length;
  let count = 0;

  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));

  // Set all length = 1 strings to true
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  // Check all strings of length = 2
  for (let j = 0; j < n - 1; j++) {
    if (s[j] === s[j + 1]) {
      dp[j][j + 1] = true;
      count++;
    }
  }

  // Check for lengths of string 3+ -> total length of string
  for (let ls = 3; ls <= n; ls++) {
    for (let x = 0; x < n - ls + 1; x++) {
      // Remove 1 for zero based index
      let y = x + ls - 1;
      if (s[x] === s[y] && dp[x + 1][y - 1]) {
        dp[x][y] = true;
        count++;
      }
    }
  }

  return count;
};
