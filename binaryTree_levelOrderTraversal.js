function levelOrderTraversal(head) {
  var currentQueue = [head];
  var nextQueue = [];

  while (currentQueue.length > 0) {
    var printResults = [];
    for (var i = 0; i < currentQueue.length; i++) {
      var current = currentQueue[i];
      if (current.left) nextQueue.push(current.left);
      if (current.right) nextQueue.push(current.right);
      printResults.push(current.val);
    }
    console.log(printResults.join('-->'));
    currentQueue = nextQueue;
    nextQueue = [];
  }
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
tree.right.right = new Node(350);

levelOrderTraversal(tree);

