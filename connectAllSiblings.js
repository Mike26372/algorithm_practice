function connectAllSiblings(head) {
  var queue = [];
  queue.push(head);

  var current, prev;

  while (queue.length > 0) {
    current = queue.shift();

    if (prev) {
      prev.next = current;
    }

    prev = current;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

  }

  return head;
}

function printNodes(startNode, reversed = false) {
  var path = [];
  var current = startNode;
  while (current) {
    path.push(current.value);
    if (!reversed) {
      current = current.next;
    } else {
      current = current.prev;
    }
  }
  console.log(path.join('-->'));
  return path;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.next = null;
}

var rootNode = new Node(100);
rootNode.left = new Node(50);
rootNode.left.left = new Node(25);
rootNode.left.right = new Node(75);
rootNode.right = new Node(200);
rootNode.right.right = new Node(300);
rootNode.right.right.right = new Node(350);

connectAllSiblings(rootNode);

printNodes(rootNode);
