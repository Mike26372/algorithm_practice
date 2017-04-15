function convertToBase7(n) {
  let base = 7;
  let exponent = 0;
  let result = '';
  while (Math.pow(base, exponent) < n) {
    exponent++;
  }

  if (Math.pow(base, exponent) !== n) {
    exponent--;
  }
  // console.log(exponent);
  // console.log(Math.pow(base, exponent));

  while (exponent > -1) {
    result += Math.floor(n / Math.pow(base, exponent));
    n = n % Math.pow(base, exponent);
    exponent--;
  }

  return result;
}

console.log(convertToBase7(7));
console.log(convertToBase7(6));
console.log(convertToBase7(14));
