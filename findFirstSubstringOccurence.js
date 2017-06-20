function findFirstSubstringOccurrence(s, x) {
  var kmp = computeTempArray(x);

  var i = 0;
  var j = 0;

  while (i < s.length && j < x.length) {
    if (s[i] === x[j]) {
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = kmp[j - 1];
      } else {
        i++;
      }
    }
  }
  if (j === x.length) return i - x.length;

  return -1;
}


function computeTempArray(pattern) {
  var temp = new Array(pattern.length).fill(0);
  var index = 0;

  for (var i = 1; i < pattern.length;) {
    if (pattern[i] === pattern[index]) {
      temp[i] = index + 1;
      index++;
      i++;
    } else {
      if (index !== 0) {
        index = temp[index - 1];
      } else {
        temp[i] = 0;
        i++;
      }
    }
  }
  return temp;
}