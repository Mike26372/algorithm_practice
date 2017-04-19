function countInversions(nums) {
  let result = mergeSort(nums);
  let [sorted, count] = result;
  console.log(count);
  return count;
}

function mergeSort(nums, count = 0) {
  let low = 0;
  let len = nums.length;
  let mid = Math.floor(len / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  if (nums.length < 2) {
    return [nums, 0];
  }

  let leftSorted = mergeSort(left, count);
  let rightSorted = mergeSort(right, count);

  return merge(leftSorted[0], rightSorted[0], leftSorted[1] + rightSorted[1]);
}

function merge(left, right, count) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
      count++;
    }
  }
  while (left.length) {
    results.push(left.shift());
  }
  while (right.length) {
    results.push(right.shift());
  }

  return [results, count];
}

var tests = [
  [2, 4, 1],
  [1, 1, 1, 2, 2],
  [2, 1, 3, 1, 2],
];

tests.forEach(test => {
  let count = countInversions(test);
  console.log(count);
});