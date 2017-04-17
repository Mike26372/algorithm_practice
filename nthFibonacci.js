function nthFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0;
  let result = 1;
  for (var i = 1; i < n; i++) {
    let temp = prev;
    prev = result;
    result = temp + prev;
  }
  return result;
}

console.log(nthFib(10));