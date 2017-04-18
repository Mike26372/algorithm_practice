function bitwiseDivision(x, y) {
  // Return -1 if y is not an appropriate divisor
  if (y === 0) return -1;

  // Set base cases
  if (y === 1) {
    return x;
  } else if (x === y) {
    return 1;
  } else if (x < y) {
    return 0;
  }

  let quotient = 1;
  let value = y;

  while (value < x) {
    // Multiply quotient and temp value by two with each step
    quotient <<= 1;
    value <<= 1;

    // If value has surpassed the initial numerator...
    if (value > x) {
      // ... move  back quotient and temp value one bit and return quotient plus recursive call
      quotient >>= 1;
      value >>= 1;
      return quotient + bitwiseDivision(x - value, y);
    }
  }

  // if value is equal to x, return quotient
  return quotient;
}

console.log(bitwiseDivision(12, 3));