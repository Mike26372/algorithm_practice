function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

var gcdTests = [[12, 3], [36, 18], [9, 2], [12, 8], [72, 36]];
// gcdTests.forEach(test => console.log(gcd.apply(this, test)));

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

var lcmTests = [[3, 4], [5, 15], [17, 2]];
lcmTests.forEach(test => console.log(lcm.apply(this, test)));