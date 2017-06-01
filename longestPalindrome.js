function longestPalSubseq(s) {
  var len = s.length;
  var T = new Array(len).fill(0).map(val => new Array(len).fill(0));

  for (var x = 0; x < len; x++) {
    T[x][x] = 1;
  }

  for (var len = 2; len <= s.length; len++) {
    for (var i = 0; i < s.length - len + 1; i++) {
      var j = i + len - 1;
      if (s[i] === s[j]) {
        if (len === 2) {
          T[i][j] = 2;
        } else {
          T[i][j] = T[i+1][j-1] + 2;
        }
      } else {
        T[i][j] = Math.max(T[i+1][j], T[i][j-1]);
      }
    }
  }
  return T[0][s.length - 1];
}
