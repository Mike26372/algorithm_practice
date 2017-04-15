function binarySearchRec(array, target, beg = 0, end = array.length - 1) {
  let midpoint = Math.floor(beg + ((end - beg) / 2));
  if (beg > end) return -1;
  if (array[midpoint] === target) return midpoint;

  if (target < array[midpoint]) {
    return binarySearchRec(array, target, beg, midpoint - 1);
  } else {
    return binarySearchRec(array, target, midpoint + 1, end);
  }

  return -1;
}

function binarySearchIter(array, target, beg = 0, end = array.length - 1) {
  var midpoint;
  while (beg <= end) {
    
    midpoint = Math.floor(beg + ((end - beg) / 2));
    
    if (array[midpoint] === target) return midpoint;

    if (target < array[midpoint]) {
      end = midpoint - 1;
    } else {
      beg = midpoint + 1;
    }

  }

  return -1;
}


// var range10 = new Array(10).fill(0).map((val, ind) => ind + 1);
var range10 = Array.from(new Array(10), (val, ind) => ind + 1);
var range100 = Array.from(new Array(100), (val, ind) => ind + 1);


var tests = [
  [range10, 5],
  [range10, 10],
  [range10, 11],
];

tests.forEach(test => console.log(binarySearchRec.apply(this, test)));
tests.forEach(test => console.log(binarySearchIter.apply(this, test)));