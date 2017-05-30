var moveZerosToLeft = function(arr) {
  let write = arr.length - 1;
  // let read = arr.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[write] = arr[i];
      arr[i] = 0;
      write--;
    }
  }
  return arr;
};

var moveZerosToLeftPointers = function(arr) {
  var read = arr.length - 1;
  var write = arr.length - 1;

  while (read >= 0) {
    if (arr[read] !== 0) {
      arr[write] = arr[read];
      write--;
    }
    read--;
  }

  while (write >= 0) {
    arr[write] = 0;
    write--;
  }

  return arr;
};

var nums = [1, 10, 20, 0, 59, 63, 0, 88, 0];
var ans = moveZerosToLeftPointers(nums);
console.log(ans);