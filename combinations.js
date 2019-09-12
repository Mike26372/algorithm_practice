function combinations(arr) {
  const result = [];
  const options = 1 << arr.length;
  console.log(options);

  for (let i = 0; i < options; i++) {
    const subset = [];
    for (let x = 0; x < arr.length; x++) {
      // if (i & (1 << x)) {
      if (i & (2 ** x)) {
        subset.push(arr[x]);
      } 
    }
    result.push(subset.join(''))
  }

  return result;
}

const result = combinations(['a', 'b', 'c', 'd'])
console.log(result);
console.log(result.length);