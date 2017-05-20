function longestIncreasingSubsequence(arr) {
  var dp = new Array(arr.length).fill(1);
  
  // Count longest increasing sequence
  for (var i = 1; i < dp.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  console.log(dp);
  return dp[dp.length - 1];
}

function longestIncSubSeqOptimized(arr) {
  var dp = new Array(arr.length).fill(0);
  var result = new Array(arr.length).fill(-1);
  var len = 0;
  for (var i = 1; i < dp.length; i++) {

  }

  return null;
}

var tests = [
  [1, 2, 3, 4, 5], // 5
  [2, 1, 3, 1, 5], // 3
  [2, 1, 3, 1, 5, 6, 5, 7, 9, 8, 10], // 7
  [12, 3, 4, 5], // 3
];

tests.forEach(test => console.log(longestIncreasingSubsequence(test)));
