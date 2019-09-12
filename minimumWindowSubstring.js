/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s && !t) return "";
  let countsT = {};

  for (let i = 0; i < t.length; i++) {
    countsT[t[i]] = (countsT[t[i]] || 0) + 1;
  }

  let uniqueTLtrsRequired = Object.keys(countsT).length;
  let windowCounts = {};

  let ans = [Infinity, null, null];
  let left = 0;
  let right = 0;

  let uniqueTLtrsIncluded = 0;

  while (right < s.length) {
    let character = s[right];

    windowCounts[character] = (windowCounts[character] || 0) + 1;

    if (countsT[character] && countsT[character] === windowCounts[character]) {
      uniqueTLtrsIncluded++;
    }

    while (left <= right && uniqueTLtrsIncluded === uniqueTLtrsRequired) {
      character = s[left];
      let currWidth = right - left + 1;

      if (currWidth < ans[0]) {
        ans = [currWidth, left, right];
      }

      windowCounts[character]--;
      if (countsT[character] && windowCounts[character] < countsT[character]) {
        uniqueTLtrsIncluded--;
      }

      left++;
    }
    right++;
  }

  if (ans[0] === Infinity) return "";
  return s.substring(ans[1], ans[2] + 1);
};
