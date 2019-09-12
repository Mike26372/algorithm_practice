/**
 * Input: [5,2,6,1] Output: [2,1,1,0]
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 * @param {number[]} nums
 * @return {number[]}
 */

class BST {
  constructor(v, s = 0) {
    this.value = v;
    this.size = s;
    this.right = null;
    this.left = null;
  }

  insert(v, s = 0) {
    if (v > this.value) {
      if (this.right) {
        return this.right.insert(v, s + this.size + 1);
      }
      this.right = new BST(v);
      return s + this.size + 1;
    } else {
      // Add one to size, meaning addition smaller elements are in this tree
      // Useful for later inserts going right
      this.size++;
      if (this.left) {
        return this.left.insert(v, s);
      }

      this.left = new BST(v);
      return s;
    }
  }
}

var countSmaller = function(nums) {
  const options = new Array(nums.length).fill(0);
  let bst = new BST(nums[nums.length - 1]);

  for (let i = nums.length - 2; i >= 0; i--) {
    options[i] = bst.insert(nums[i]);
  }

  return options;
};
