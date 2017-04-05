var quickSort = function(arr) {
  if (arr.length < 2) return arr;
  var pivot = arr.pop();
  var left = [];
  var right = [];
  var len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let below = quickSort(left);
  let above = quickSort(right);
  return [...below, pivot, ...above];
};

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var ans = quickSort(nums);
console.log(ans);