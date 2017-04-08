function findPalindromes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += findPalindromesInSubstring(str, i, i + 1);
    count += findPalindromesInSubstring(str, i - 1, i + 1);
  }
  return count;
}

function findPalindromesInSubstring(str, beg, end) {
  
  let count = 0;
  while (beg >= 0 && end < str.length) {
    if (str[beg] !== str[end]) break;
    count++;
    beg--;
    end++;
  }
  return count;
}

console.log(findPalindromes('aabbbaa'));