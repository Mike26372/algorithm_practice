function arrayRotation(array, n) {
  let len = array.length;

  n = n % len;
  if (n < 0) n = n + len;
  // Change value for left rotation
  n = len - n;

  reverseArray(array, 0, len - 1);
  reverseArray(array, 0, n - 1);
  reverseArray(array, n, len - 1);

  return array;
}

function reverseArray(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

console.log(arrayRotation([1, 2, 3, 4, 5], 4));