/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  let len = s.length;

  function checkPalindromes(beg, end) {
    while (beg >= 0 && end < len) {
      if (s[beg] !== s[end]) {
        break;
      }
      count++;
      beg--;
      end++;
    }
  }

  for (let i = 0; i < len; i++) {
    checkPalindromes(i, i);
    checkPalindromes(i, i + 1);
  }

  return count;
};
