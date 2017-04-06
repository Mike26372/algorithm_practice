function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function balancedTreeChecker(node, lowerBound = -Infinity, upperBound = Infinity ) {
  if (!node) return true;

  if (node.value <= lowerBound || node.value >= upperBound) return false;

  return balancedTreeChecker(node.left, lowerBound, node.value) && balancedTreeChecker(node.right, node.value, upperBound);
}


var head = new BinaryTreeNode(5);
head.insertLeft(4);
head.insertRight(6);
head.left.insertLeft(4);
head.left.left.insertLeft(5);