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



function balancedTreeRecursive(head) {
  var depths = getDepth(head);
  let [left, right] = depths;
  console.log(left, right);
  return Math.abs(left - right) > 1 ? false : true;
}

function getDepth(node) {
  let left, right;
  if (node === null) return [0];
  left = 1 + Math.max.apply(null, getDepth(node.left));
  right = 1 + Math.max.apply(null, getDepth(node.right));
  return [left, right];
}

var head = new BinaryTreeNode(1);
head.insertLeft(2);
head.insertRight(3);
head.left.insertLeft(4);
head.left.left.insertLeft(5);

console.log(balancedTreeRecursive(head));

function balancedTreeIterative(head) {
  var depths = [];
  var nodes = [];
  nodes.push([head, 0]);
  
  while (nodes.length) {
    let current = nodes.pop();
    let [node, depth] = current;
    // Check if node is a leaf
    if (!node.left && !node.right) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) return false;
      }
    } else {
      // Not a leaf so step down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}