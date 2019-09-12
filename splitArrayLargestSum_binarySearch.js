/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let max = 0;
  let sum = 0;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    max = Math.max(max, nums[i]);
    sum += nums[i];
  }

  let low = max;
  let high = sum;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    let pieces = split(nums, mid);
    if (pieces > m) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

function split(nums, maxSum) {
  let sum = 0;
  let pieces = 1;

  for (let j = 0; j < nums.length; j++) {
    if (sum + nums[j] > maxSum) {
      sum = nums[j];
      pieces++;
    } else {
      sum += nums[j];
    }
  }

  return pieces;
}
