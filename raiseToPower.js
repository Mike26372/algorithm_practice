function raiseToPower(base, exponent) {
  // Set base cases
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  let temp = raiseToPower(base, Math.floor(exponent / 2));

  if (exponent % 2 === 0) {
    return temp * temp;
  } else {
    return base * temp * temp;
  }
} 

var tests = [
  [2, 4], // 16
  [3, 3], // 27
  [16, 2], // 256
  [9, 2], // 81
  [5, 3], // 125
];

tests.forEach(test => console.log(raiseToPower.apply(this, test)));