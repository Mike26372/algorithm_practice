/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = -Infinity;

  function innerRecurse(node) {
    if (!node) return 0;

    let leftGain = Math.max(innerRecurse(node.left), 0);
    let rightGain = Math.max(innerRecurse(node.right), 0);

    let currentVal = node.val + leftGain + rightGain;

    maxSum = Math.max(currentVal, maxSum);
    return node.val + Math.max(leftGain, rightGain);
  }

  innerRecurse(root);

  return maxSum;
};
