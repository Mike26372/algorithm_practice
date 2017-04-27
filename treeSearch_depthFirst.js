function depthFirst(head) {
  let stack = [];
  let current;
  stack.push(head);

  while (stack.length) {
    current = stack.pop();
    console.log(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  
  return;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);

depthFirst(head);