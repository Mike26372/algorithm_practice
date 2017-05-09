function timetableGenerator(inTimes, outTimes) {
  var inTimesSorted = inTimes.sort((a, b) => a - b);
  var outTimesSorted = outTimes.sort((a, b) => a - b);
  var tableLength = inTimes.length;
  
  var inPointer = 1;
  var outPointer = 0;
  var result = [];
  result.push([inTimesSorted[0], 1]);

  while (inPointer < tableLength || outPointer < tableLength) {
    var latestResult = result[result.length - 1];
    var [time, count] = latestResult;

    var currInTime = inTimesSorted[inPointer];
    var currOutTime = outTimesSorted[outPointer];
    
    if (currInTime && currInTime <= currOutTime) {
      if (time === currInTime) {
        latestResult[1]++;
      } else {
        result.push([currInTime, count + 1]);
      }
      inPointer++;
    } else {
      if (time === currOutTime) {
        latestResult[1]--;
      } else {
        result.push([currOutTime, count - 1]);
      }
      outPointer++;
    }
  }

  return result;

}

var inTimes = [3, 5, 7, 8, 14, 5];
var outTimes = [7, 7, 14, 12, 20, 20];

var answer = timetableGenerator(inTimes, outTimes);
console.log(answer);