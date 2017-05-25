function subsetSumTwoSubsets(arr) {
  var sum = arr.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;

  sum = sum / 2;

  var dp = new Array(arr.length + 1).fill(0).map(col => new Array(sum + 1).fill(false));


  dp.forEach(col => col[0] = true);
  //console.log(dp);

  for (var i = 1; i <= arr.length; i++) {
    for (var j = 0; j <= sum; j++) {
      if (arr[j] >= i) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
      }
    }
  }
  //console.log(dp)
  return dp[arr.length][sum];
}

var tests = [
  [3, 5, 16, 8], // true
  [5, 7, 1], // false
  [2, 4, 8], // false
  [87, 56, 43, 91, 27, 65, 59, 36, 32, 51, 37, 28, 75, 7, 74], // true
];

tests.forEach(test => console.log(subsetSumTwoSubsets(test)));