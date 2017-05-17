function longestCommonSubsequence(s, t) {
  var LCS = new Array(s.length + 1).fill(0).map(col => new Array(t.length + 1).fill(0));
  
  for (var i = 1; i < s.length + 1; i++) {
    for (var j = 1; j < t.length + 1; j++) {
      if (s[i - 1] === t[j - 1]) 
        LCS[i][j] = LCS[i - 1][j - 1] + 1;
      else
        LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
    }
  }
  console.log(LCS);
  return LCS[LCS.length - 1][LCS[0].length - 1];
}