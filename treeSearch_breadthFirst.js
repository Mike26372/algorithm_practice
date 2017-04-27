function breadthFirst(node) {
  let queue = [];
  let current;
  queue.push(node);

  while (queue.length) {
    current = queue.shift();
    console.log(current.value);
    
    if (current.left) {
      queue.push(current.left);
    }
    
    if (current.right) {
      queue.push(current.right);
    }
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

breadthFirst(head);