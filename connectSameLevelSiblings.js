/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root;

  let current = root;

  while (current) {
    current = connectNextLevel(current);
  }

  return root;
};

function connectNextLevel(node) {
  let current = node;
  let nextLevelHead = null;
  let prev = null;

  while (current) {
    if (current.left && current.right) {
      if (!nextLevelHead) nextLevelHead = current.left;

      current.left.next = current.right;

      if (prev) {
        prev.next = current.left;
      }

      prev = current.right;
    } else if (current.left) {
      if (!nextLevelHead) nextLevelHead = current.left;

      if (prev) {
        prev.next = current.left;
      }

      prev = current.left;
    } else if (current.right) {
      if (!nextLevelHead) nextLevelHead = current.right;

      if (prev) {
        prev.next = current.right;
      }

      prev = current.right;
    }

    current = current.next;
  }

  return nextLevelHead;
}
