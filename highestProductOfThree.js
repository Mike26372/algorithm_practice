// var highestProductOfThree = function(array) {
//   var len = array.length;
//   var highest = 1;
//   var lowest = 1;
//   var highestProductOfTwo = 1;
//   var lowestProductOfTwo = 1;
//   var highestProduct = 1;
//   for (let i = 0; i < len; i++) {
//     let current = array[i];
//     if ((highestProductOfTwo * current) > highestProduct || (lowestProductOfTwo * current) > highestProduct) {
//       highestProduct = (highestProductOfTwo * current) > (lowestProductOfTwo * current) ? (highestProductOfTwo * current) : (lowestProductOfTwo * current);
//     }
//     if (current < 0) {
//       let abs = Math.abs(current);
//       if ((abs * Math.abs(lowest)) > lowestProductOfTwo) lowestProductOfTwo = (abs * Math.abs(lowest));
//     } else {
//       if ((current * highest) > highestProductOfTwo) highestProductOfTwo = (current * highest);
//     }
//     if (current > highest) highest = current;
//     if (current < lowest) lowest = current;
//   }
//   // console.log(highest, lowest, highestProductOfTwo, lowestProductOfTwo, highestProduct);
//   return Math.max(highestProduct, highest * lowestProductOfTwo);
// };

function highestProductOfThree(array) {
  let highest = null;
  let lowest = null;
  let highestTwo = null;
  let lowestTwo = null;
  let highestThree = null;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    // Set highestThree based on new number if highestTwo exists
    if (highestTwo) {
      highestThree = Math.max(current * highestTwo, highestThree || 0);
    }
    
    // If current is positive
    if (current > 0) {
      // If highest has been set, set new highestTwo
      if (highest) {
        highestTwo = Math.max(current * highest, highestTwo || 0);
      }
      // Set new highest
      highest = Math.max(current, highest || 0);
    } else {
    // If current is negative
      // If lowest has been set, set new lowestTwo
      if (lowest) {
        lowestTwo = Math.max(current * lowest, lowestTwo || 0);
      }
      // Set new lowest
      lowest = Math.min(current, lowest || 0);
    }

  }

  return Math.max(highestThree, lowestTwo * highest);
}


var tests = [
  [1, 10, -5, 1, -100], // 5,000
  [1, 2, 3, 4, 5], // 60
  [-10, -10, 1, 3, 2] // 300
];

tests.forEach(test => console.log(highestProductOfThree(test)));