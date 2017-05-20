function subsetSum(arr, target) {
  var dp = new Array(arr.length).fill(0).map(col => new Array(target + 1).fill(false));

  // Set first column
  dp.forEach(col => col[0] = true);
  
  // Set first row
  dp[0][arr[0]] = true;

  // Find subset using DP
  for (var i = 1; i < dp.length; i++) {
    for (var j = 0; j < dp[0].length; j++) {
      if (j < arr[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - arr[i]] || dp[i - 1][j];
      }
    }
  }

  // Find numbers within subset by traversing backwards through array
  var subset = [];
  var row = dp[0].length - 1;
  var col = dp.length - 1;

  if (dp[col][row]) {
    while (row > 0 && col > 0) {
      while (col > 0 && dp[col - 1][row]) {
        col--;
      }
      subset.push(arr[col]);
      row = row - arr[col];
    }
  }

  console.log(dp);
  console.log(subset);
  return dp[arr.length - 1][target];
}

var tests = [
  [[1, 2, 3, 4], 5], // true
  [[2, 3, 5, 8], 7], // true
  [[3, 4, 5, 8], 7], // true
  [[2, 3, 7], 7], // true
  [[2, 3, 7, 8, 10], 14], // false
];

tests.forEach(test => console.log(subsetSum.apply(this, test)));

