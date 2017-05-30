// quicksort using random pivot point

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (high > low) {
    var partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  var pivotIndex = low + Math.floor(Math.random() * (high - low + 1));
  var pivotVal = arr[pivotIndex];

  // swap pivot value with beginning of array  
  arr[pivotIndex] = arr[low];
  arr[low] = pivotVal;

  // reset pivot index to beginning of array
  pivotIndex = low;

  var left = low;
  var right = high;

  while (left < right) {
    while (arr[left] <= pivotVal && left <= high) {
      left++;
    }

    while (arr[right] > pivotVal) {
      right--;
    }

    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    } else {
      break;
    }
  }

  arr[pivotIndex] = arr[right];
  arr[right] = pivotVal;

  return right;
}

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
quickSort(nums);
console.log(nums);