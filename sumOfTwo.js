function sumOfTwo(a, b, v) {
  'use strict'
  let hash = {};
  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    hash[current] = current;
  }
  for (let j = 0; j < b.length; j++) {
    let current = b[j];
    let difference = v - current;
    if (hash[difference]) return true;
  }
  return false;
}