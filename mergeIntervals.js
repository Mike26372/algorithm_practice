/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let stack = [intervals[0]];

  console.log(intervals);

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    const last = stack[stack.length - 1];
    if (curr[0] <= last[1]) {
      last[0] = Math.min(curr[0], last[0]);
      last[1] = Math.max(curr[1], last[1]);
    } else {
      stack.push(curr);
    }
  }

  return stack;
};
