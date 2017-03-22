let findMaxSlidingWindow = function(arr, windowSize) {
  let result = [];
  if (windowSize > arr.length) {
    return;
  }

  let window_ = [];
  //find out max for first window
  for (let i = 0; i < windowSize; i++) {
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    // Keeps track of arr index within window
    window_.push(i);
  }
  
  for (let i = windowSize; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    
    //remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 && (window_[0] <= i - windowSize)) {
      window_.shift();
    }
    
    window_.push(i);
    result.push(arr[window_[0]]);
  }
  
  return result;
};

var tests = [[[-4, 2, -5, 3, 6], 3], [[-4, 2, -5, 1, -1, 6], 3]];

tests.forEach(test => {
  console.log(findMaxSlidingWindow.apply(this, test));
});