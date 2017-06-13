function tripletSum(x, a) {
  var hash = a.reduce((acc, curr) => {
    acc[curr] = acc[curr] || 0;
    acc[curr]++;
    return acc;
  }, {});
  
 
 for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a.length; j++) {
    if (i === j) continue;
    var hashCopy = Object.assign({}, hash);
    hashCopy[a[i]]--;
    hashCopy[a[j]]--;
    var sumOfTwo = a[i] + a[j];
    var remainder = x - sumOfTwo;
   if (hashCopy[remainder] > 0) return true;
  }
 }
 
 return false;
}