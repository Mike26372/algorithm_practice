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

function nthFibRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nthFibRecursive(n - 2) + nthFibRecursive(n - 1);
}

function memoize(func) {
  var cache = {};
  return function() {
    let key = JSON.stringify(arguments);
    if (!cache.hasOwnProperty(key)) {
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  };
}

var fibonacciMemoized = memoize(nthFib);

console.log(nthFib(10));
console.log(nthFibRecursive(10));
console.log(fibonacciMemoized(10));