var searchHighLowIndex = function(arr, key) {
  let low = findLowIndex(arr, key);
  let high = findHighIndex(arr, key);
  return [low, high];
};

var findLowIndex = function(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((high) / 2);

  while ( low <= high ) {
    let midVal = arr[mid];
    if (midVal < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (arr[low] === key) return low;
  return -1;
};

var findHighIndex = function(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((high) / 2);

  while ( low <= high ) {
    let midVal = arr[mid];
    if (midVal <= key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }

  if (arr[high] === key) return high;
  return -1;
};


var tests = [
  [[1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 0],
  [[1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 1],
  [[1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 5],
  [[1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20], 20],
];

tests.forEach(test => {
  console.log(searchHighLowIndex.apply(this, test));
});