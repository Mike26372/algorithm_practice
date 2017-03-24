function mergeSort (nums) {
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
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
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

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var ans = mergeSort(nums);
console.log(ans);
