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

var quickSortConstantMem = function (arr, low = 0, high = arr.length - 1) {
  
  if (low >= high) return;

  let pivot = arr[low];
  let leftIndex = low;
  let rightIndex = high;

  while (leftIndex < rightIndex) {
    while (arr[leftIndex] <= pivot && leftIndex <= high) {
      leftIndex++;
    }

    while (arr[rightIndex] > pivot) {
      rightIndex--;
    }
    // if left is less than right, numbers in need of a pivot have been found
    if (leftIndex < rightIndex) {
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
    } else {
      break;
    }
  }
  // swap pivot value with middle value at pivot position
  arr[low] = arr[rightIndex];
  arr[rightIndex] = pivot;
  quickSortConstantMem(arr, low, rightIndex - 1);
  quickSortConstantMem(arr, rightIndex + 1, high);
  return arr;
};

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var ans = quickSortConstantMem(nums);
console.log(ans);