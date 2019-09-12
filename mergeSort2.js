function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // console.log(left, right)

  return merge(mergeSort(left), mergeSort(right));
}

function merge(a1, a2) {
  const merged = [];
  console.log('BEFORE: ', a1, a2)
  while (a1.length && a2.length) {
    if (a1[0] < a2[0]) {
      let temp = a1.shift();
      merged.push(temp);
    } else {
      let temp = a2.shift();
      merged.push(temp)
    }
  }

  while (a1.length) {
    merged.push(a1.shift())
  }

  while (a2.length) {
    merged.push(a2.shift())
  }

  console.log('MERGED: ', merged)
  return merged;
}




var tests = [
  [2, 4, 1],
  [1, 1, 1, 2, 2],
  [2, 1, 3, 1, 2],
];

tests.forEach(test => {
  let sorted = mergeSort(test);
  // console.log(count);
  console.log(sorted);
  // count = 0;
});