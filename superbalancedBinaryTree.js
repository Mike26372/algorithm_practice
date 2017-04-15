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

function checkSuperbalanced(head) {
  var depths = [];

  // Create stack and push first item into stack with depth of 0
  var stack = [];
  stack.push([head, 0]);

  // Run loop while stack still has items to be checked
  while (stack.length) {
    // Pop current node & depth off of top of stack
    let current = stack.pop();

    // Deconstruct array into current node and current depth variables
    let [node, depth] = current;

    // Check if at a leaf node
    if (!node.left && !node.right) {
      // Add current depth to list if not in depths tracker
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
      } 
      // Check if depths mean tree isn't "superbalanced"
      if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
        return false;
      }
    }

    // If not at a leaf, add left and right nodes to stack and add 1 to depth
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  console.log(depths);
  return true;
}

var head = new BinaryTreeNode(1);
head.insertLeft(2);
head.insertRight(3);
head.left.insertLeft(4);
head.left.insertRight(5);
head.right.insertLeft(6);
head.right.insertRight(7);

console.log(checkSuperbalanced(head)); // true

head.left.left.insertLeft(8);
head.left.left.left.insertLeft(9);

console.log(checkSuperbalanced(head)); // false