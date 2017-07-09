function nearestGreater(a) {
  var length = a.length;
  var maxBefore = a.slice();
  var maxAfter = a.slice();
  var result = new Array(length).fill(0);
  
  for (var i = 1; i < length; i++) {
    maxBefore[i] = Math.max(maxBefore[i - 1], maxBefore[i]);
  }
  
  for (var j = length - 2; j >= 0; j--) {
    maxAfter[j] = Math.max(maxAfter[j + 1], maxAfter[j]);
  }
  
  for (var x = 0; x < length; x++) {
    var current = a[x];
    var before = undefined, after = undefined, beforeIndex, afterIndex;
    if (maxBefore[x - 1] && maxBefore[x - 1] > current) {
      beforeIndex = x - 1;
      while ( a[beforeIndex] <= current ) {
        beforeIndex--;
      }
      before = a[beforeIndex];
    }
    
    if (maxAfter[x + 1] && maxAfter[x + 1] > current) {
      afterIndex = x + 1;
      while (a[afterIndex] <= current) {
        afterIndex++;
      }
      after = a[afterIndex];
    }
    
    var closestIndex;

    if (before > current && after > current) {
      if (x - beforeIndex === afterIndex - x) {
        closestIndex = beforeIndex;
      } else if (x - beforeIndex < afterIndex - x) {
        closestIndex = beforeIndex;
      } else {
        closestIndex = afterIndex;
      }
    } else if (before > current) {
      closestIndex = beforeIndex;
    } else if (after > current) {
      closestIndex = afterIndex;
    } else {
      closestIndex = -1;
    }
  
    result[x] = closestIndex;
  }
  
  return result;
}
