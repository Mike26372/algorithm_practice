var highestProductOfThree = function(array) {
  var len = array.length;
  var highest = 1;
  var lowest = 1;
  var highestProductOfTwo = 1;
  var lowestProductOfTwo = 1;
  var highestProduct = 1;
  for (let i = 0; i < len; i++) {
    let current = array[i];
    if ((highestProductOfTwo * current) > highestProduct || (lowestProductOfTwo * current) > highestProduct) {
      highestProduct = (highestProductOfTwo * current) > (lowestProductOfTwo * current) ? (highestProductOfTwo * current) : (lowestProductOfTwo * current);
    }
    if (current < 0) {
      let abs = Math.abs(current);
      if ((abs * Math.abs(lowest)) > lowestProductOfTwo) lowestProductOfTwo = (abs * Math.abs(lowest));
    } else {
      if ((current * highest) > highestProductOfTwo) highestProductOfTwo = (current * highest);
    }
    if (current > highest) highest = current;
    if (current < lowest) lowest = current;
  }
  // console.log(highest, lowest, highestProductOfTwo, lowestProductOfTwo, highestProduct);
  return Math.max(highestProduct, highest * lowestProductOfTwo);
};

var tests = [
  [1, 10, -5, 1, -100],
  [1, 2, 3, 4, 5]
];

tests.forEach(test => console.log(highestProductOfThree(test)));