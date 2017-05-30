function rotateArray(a) {
  var levels = Math.floor(a.length / 2);
  var len = a.length;
  for (var i = 0; i < levels; i++) {
    for (var j = i; j < len - 1 - i; j++) {
      var temp = a[i][j];
      a[i][j] = a[len-j-1][i];
      a[len-j-1][i] = a[len-i-1][len-j-1];
      a[len-i-1][len-j-1] = a[j][len-i-1];
      a[j][len-i-1] = temp;
    }
  }
  return a;
}