function maxRangeSlidingWindow(arr, w) {

  var minInWindow = minSlidingWindow(arr, w);
  var maxInWindow = maxSlidingWindow(arr, w);
  var maxRangeInWindow = new Array(arr.length - w + 1);

  var maxRangeInWindow = minInWindow.map((minVal, ind) => maxInWindow[ind] - minVal);

  console.log('Max Range In Window: ', maxRangeInWindow);
  return maxRangeInWindow.reduce((acc, curr) => acc > curr ? acc : curr, 0);
}

function minSlidingWindow(arr, w) {
  var minFromLeft = new Array(arr.length);
  var minFromRight = new Array(arr.length);

  minFromLeft[0] = arr[0];
  minFromRight[arr.length - 1] = arr[arr.length - 1];

  for (var i = 1; i < arr.length; i++) {
    minFromLeft[i] = (i % w === 0) ? arr[i] : Math.min(minFromLeft[i - 1], arr[i]); 
    // var j = arr.length - i - 1;
    // minFromRight[j] = (j+1 % w === 0) ? arr[j] : Math.min(minFromRight[j + 1], arr[j]);
  }

  for (var j = arr.length - 2; j >= 0; j--) {
    minFromRight[j] = (j % w === w - 1) ? arr[j] : Math.min(minFromRight[j + 1], arr[j]);
  }

  var slidingMin = new Array(arr.length - w + 1);
  for (var k = 0; k < slidingMin.length; k++) {
    slidingMin[k] = Math.min(minFromRight[k], minFromLeft[k + w - 1]);
  }
  console.log('Min From Left: ', minFromLeft);
  console.log('Min From Right: ', minFromRight);
  console.log('Sliding Min: ', slidingMin);

  return slidingMin;
}

function maxSlidingWindow(arr, w) {
  var maxFromLeft = new Array(arr.length);
  var maxFromRight = new Array(arr.length);

  maxFromLeft[0] = arr[0];
  maxFromRight[arr.length - 1] = arr[arr.length - 1];

  for (var i = 1; i < arr.length; i++) {
    maxFromLeft[i] = (i % w === 0) ? arr[i] : Math.max(maxFromLeft[i - 1], arr[i]); 
    // var j = arr.length - i - 1;
    // maxFromRight[j] = (j % w === 0) ? arr[j] : Math.max(maxFromRight[j + 1], arr[j]);
  }

  for (var j = arr.length - 2; j >= 0; j--) {
    maxFromRight[j] = (j % w === w - 1) ? arr[j] : Math.max(maxFromRight[j + 1], arr[j]);
  }

  var slidingMax = new Array(arr.length - w + 1);
  for (var k = 0; k < slidingMax.length; k++) {
    slidingMax[k] = Math.max(maxFromRight[k], maxFromLeft[k + w - 1]);
  }

  console.log('Max From Left: ', maxFromLeft);
  console.log('Max From Right: ', maxFromRight);
  console.log('Sliding Max: ', slidingMax);

  return slidingMax;
}

console.log(maxRangeSlidingWindow([2,1,3,4,6,3,8,9,10,12,56], 4));
console.log(maxRangeSlidingWindow([6, 9, 4, 7, 4, 1], 3));