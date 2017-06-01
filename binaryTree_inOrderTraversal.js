function inOrderTraversal(head) {
  var stack = [];
  var result = [];
  var current = head;
  while (stack.length !== 0 || current) {
    if (current) {
      stack.push(current);
      current = current.left;
      continue;
    }

    result.push(stack[stack.length - 1].val);
    current = stack[stack.length - 1].right;
    stack.pop();
  }
  return result.join('-->');
}

function Node(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

var tree = new Node(100);
tree.left = new Node(50);
tree.right = new Node(200);
tree.left.left = new Node(25);
tree.left.right = new Node(75);
tree.left.left.right = new Node(35);

console.log(inOrderTraversal(tree));

