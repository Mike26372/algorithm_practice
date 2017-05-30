function findAvailableTimes(arr) {
  var sorted = concatAndSort(arr);
  var unavailableRanges = mergeRanges(sorted);

  var result = [];
  if (unavailableRanges[0][0] > 0) {
    result.push([0, unavailableRanges[0][0]]);
  }
  for (var i = 1; i < unavailableRanges.length; i++) {
    result.push([unavailableRanges[i - 1][1], unavailableRanges[i][0]]);
  }
  if (unavailableRanges[unavailableRanges.length - 1][1] < 23) {
    result.push([unavailableRanges[unavailableRanges.length - 1][1], 23]);
  }
  console.log(result);
  return result;
}

function concatAndSort(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), [])
            .sort((a, b) => a[0] - b[0]);
}

// Assumes range is sorted
function mergeRanges(arr) {
  var stack = [];
  stack.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    var latest = stack[stack.length - 1];
    var current = arr[i];
    if (current[0] > latest[1]) {
      stack.push(current);
    } else {
      latest[1] = Math.max(current[1], latest[1]);
    }
  }
  return stack;
}

var test = [ 
  [[4, 5], [6, 10], [12, 14]], 
  [[4, 5], [5, 9], [13, 16]], 
  [[11, 14]] 
];

findAvailableTimes(test);


