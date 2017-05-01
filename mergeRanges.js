// function mergeRanges(array) {
//   var sorted = array.sort((a, b) => a.startTime - b.startTime);
//   var start, end, result;
//   result = [];
//   start = array[0].startTime;
//   end = array[0].endTime;
//   for (let i = 1; i < array.length; i++) {
//     let {startTime, endTime} = array[i];
//     if (startTime > end) {
//       result.push({startTime: start, endTime: end});
//       start = startTime;
//       end = endTime;
//     };
//     if (startTime >= start && endTime <= end) continue;
//     if (startTime >= start && endTime > end) end = endTime;
    
//   }
//   result.push({startTime: start, endTime: end});
//   console.log(start, end);
//   return result;
// }

function mergeRanges(array) {
  var sortedRanges = array.sort((a, b) => a.startTime < b.startTime ? -1 : 1);
  var mergedRanges = [];
  mergedRanges.push(sortedRanges[0]);

  for (let i = 1; i < array.length; i++) {
    let currentRange = array[i];
    let {startTime, endTime} = currentRange;
    let lastMergedRange = mergedRanges[mergedRanges.length - 1];

    if (startTime <= lastMergedRange.endTime) {
      lastMergedRange.endTime = Math.max(lastMergedRange.endTime, endTime);
    } else {
      mergedRanges.push(currentRange);
    }

  }
  return mergedRanges;
}

var test = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 5},
    {startTime: 4, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9, endTime: 10},
];

var test2 = [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];

var ans = mergeRanges(test);
var ans2 = mergeRanges(test2);
console.log(ans);
console.log(ans2);