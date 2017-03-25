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

var nums = [1, 10, 20, 0, 59, 63, 0, 88, 0];
var ans = moveZerosToLeft(nums);
console.log(ans);