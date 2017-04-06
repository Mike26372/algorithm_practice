function changePossibilities(total, denominations) {
  // Add one to length of array to account for 0
  var counts = new Array(total + 1).fill(0);
  // Set the count for zero equal to one, as there is only one way to make zero
  counts[0] = 1;

  denominations.forEach((coin) => {
    // Iterate from current coin value to end of count array
    for (let highest = coin; highest <= total; highest++) {
      let remainder = highest - coin;
      counts[highest] += counts[remainder];
    }
  });
  return counts[total];
}

var tests = [[4, [1, 2, 3]], [5, [1, 3, 5]]];

tests.forEach(test => {
  console.log(changePossibilities.apply(this, test));
});