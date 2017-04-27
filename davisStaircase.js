function countWaysToClimbStaircase(n) {
  let result = new Array(n + 1).fill(0);
  result[0] = 0;
  result[1] = 1;
  result[2] = 2;
  if (n <= 2) return result[n];

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}

var tests = [1, 2, 3, 4, 5, 6, 7];
tests.forEach(test => {
  console.log(countWaysToClimbStaircase(test));
});