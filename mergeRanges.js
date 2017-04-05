function mergeRanges(array) {
  var sorted = array.sort((a, b) => a.startTime - b.startTime);
  var start, end, result;
  result = [];
  start = array[0].startTime;
  end = array[0].endTime;
  for (let i = 1; i < array.length; i++) {
    let {startTime, endTime} = array[i];
    if (startTime > end) {
      result.push({startTime: start, endTime: end});
      start = startTime;
      end = endTime;
    };
    if (startTime >= start && endTime <= end) continue;
    if (startTime >= start && endTime > end) end = endTime;
    
  }
  result.push({startTime: start, endTime: end});
  console.log(start, end);
  return result;
}

var test = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 5},
    {startTime: 4, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9, endTime: 10},
];

var ans = mergeRanges(test);
console.log(ans);