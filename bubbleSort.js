function bubbleSort(array) {
  let totalSwaps = 0;
  for (let i = 0; i < array.length; i++) {
    let numSwaps = 0;
    for (let j = 0; j < array.length - 1; j++) {
      let current = array[j];
      let next = array[j + 1];
      if (current > next) {
        swap(j, j + 1, array);
        numSwaps++;
      }
    }
    if (numSwaps === 0) break;
    totalSwaps += numSwaps;
  }
  console.log(`Array is sorted in ${totalSwaps} swaps.`);
  console.log(`First Element: ${array[0]}`);
  console.log(`Last Element: ${array[array.length - 1]}`);
  return array;
}

function swap(a, b, array) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([1, 5, 8, 12, 6, 10, 7, 4, 3, 2]));