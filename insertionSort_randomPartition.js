function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function partition(arr, start, end) {
  const randomIndex = start + Math.floor(Math.random() * (end - start));
  console.assert(randomIndex >= start, "IS GREATER THAN START");
  console.assert(randomIndex <= end, "IS LESS THAN END");
  let x = start;
  let y = end;

  // Swap random index and high index for simplicity
  swap(arr, randomIndex, end);

  // Pivot value is now at end of current set
  let pivotVal = arr[end];

  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, end);

  console.log("AFTER PARTITION");
  console.log(partitionIndex);
  console.log(arr);
  return partitionIndex;
}

function insertionSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const partitionIndex = partition(arr, start, end);
    insertionSort(arr, start, partitionIndex - 1);
    insertionSort(arr, partitionIndex + 1, end);
  }
  return arr;
}

let test = [4, 8, 2, 3, 1, 9, 7, 6, 5, 10];
let ans = insertionSort(test);
console.log("RESULT: ");
console.log(ans);
