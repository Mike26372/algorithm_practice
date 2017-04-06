function findSecondLargest(node) {
  if (!node || (!node.right && !node.left)) throw new Error('Must have at least two nodes');

  // If left node exists but no right node, largest / rightmost value of subtree must be second largest
  if (node.left && !node.right) {
    return findLargest(node.left);
  }  

  // If right node exists and is a leaf, current node must be second largest
  if (node.right && !node.right.right && !node.right.left) return node.value;

  // Else, step right and repeat
  return findSecondLargest(node.right);

}




function findLargest(node) {
  if (!node) throw new Error('Must have a root node');

  if (node.right) return findLargest(node.right);
  
  return node.value;
}