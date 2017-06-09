function regularExpressionMatching(s, p) {
  // Create DP grid
  var dp = new Array(s.length + 1).fill(0).map(col => new Array(p.length + 1).fill(false));
  // Set value of empty string and pattern to true
  dp[0][0] = true;
  
  // Take care of * at every other character in pattern
  for (var x = 1; x < dp[0].length; x++) {
    if (p[x - 1] === '*') dp[0][x] = dp[0][x - 2];
  }
  
  for (var i = 1; i < dp.length; i++) {
    for (var j = 1; j < dp[0].length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }
  
  return dp[s.length][p.length];
}
