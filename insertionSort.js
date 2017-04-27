// function insertionSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] < nums[j]) {
//         let [spliced] = nums.splice(i, 1);
//         nums.splice(j, 0, spliced);
//       }
//     }
//   }
//   return nums;
// }

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        // Save value at i in temporary variable
        let temp = nums[i];
        // Move items from j to i one spot to the right, moving backwards to not overwrite values
        for (let k = i; k > j; k--) {
          nums[k] = nums[k - 1];
        }
        // Set index at j to temporary value
        nums[j] = temp;
      }
    }
  }
  return nums;
}

let test = [4, 8, 2, 3, 1, 9, 7, 6, 5, 10];
let ans = insertionSort(test);
console.log(ans);