// Returns the first occurence of a duplicate in O(n) time and O(1) space

function firstDuplicate(a) {
  for (var i = 0; i < a.length; i++) {
    var index = Math.abs(a[i]) - 1;
    if (a[index] >= 0) {
      a[index] = -1 * a[index];
    } else {
      return Math.abs(a[i]);
    }
  }
  return -1;
}