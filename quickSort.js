var quickSortSimple = function(arr) {
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
  let below = quickSortSimple(left);
  let above = quickSortSimple(right);
  return [...below, pivot, ...above];
};

var quickSort = function(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    console.log(arr);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
  }
};

function partition(arr, low, high) {
  let pivot = arr[high];
  let pivotIndex = low;

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, high, pivotIndex);
  return pivotIndex;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var ans = quickSort(nums);
console.log(ans);
