var count = 0;
function mergeSort (nums) {
  var count = 0;
  let low = 0;
  let len = nums.length;
  let mid = Math.floor(len / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  if (nums.length < 2) {
    return nums;
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
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

  return results;
}

var tests = [
  [2, 4, 1],
  [1, 1, 1, 2, 2],
  [2, 1, 3, 1, 2],
];

tests.forEach(test => {
  let sorted = mergeSort(test);
  console.log(count);
  console.log(sorted);
  count = 0;
});
