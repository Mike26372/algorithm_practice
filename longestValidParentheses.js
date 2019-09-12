/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (!s) return 0;
  let dp = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1] === "(") {
      dp[i] = (dp[i - 2] || 0) + 2;
    }

    if (s[i] === ")" && s[i - 1] === ")" && s[i - dp[i - 1] - 1] === "(") {
      dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0) + 2;
    }
  }

  return Math.max.apply(null, dp);
};

const tests = ["(()", ")()())", "()(()))", "(()())"];
const outputs = [2, 4, 6, 6];
