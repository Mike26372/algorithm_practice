function binarySearchRotated(array, target) {
  let beg = 0;
  let end = array.length - 1;
  let midpoint;
  
  while (beg <= end) {
    midpoint = beg + Math.floor((end - beg) / 2);
    let currVal = array[midpoint];
    if (currVal === target) return midpoint;
    let begVal = array[beg];
    let endVal = array[end];
    // if midpoint is greater than beginning and target is between beginning and midpoint
    if (currVal > begVal && target < currVal && target >= begVal) {
      end = midpoint - 1;
    // if midpoint is less than end and target is between midpoint and end
    } else if (currVal < endVal && target > currVal && target <= endVal) {
      beg = midpoint + 1;
    // if midpoint is greater than ending, rotation must be in right side; go right
    } else if (currVal > endVal) {
      beg = midpoint + 1;
    // if midpoint is less than beginning, rotation must be in left side; go left
    } else {
      end = midpoint - 1;
    }
  }
  // return -1 if target does not exist
  return -1;
}

var test = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log(binarySearchRotated(test, 5));
console.log(binarySearchRotated(test, 2));
console.log(binarySearchRotated(test, 11));
