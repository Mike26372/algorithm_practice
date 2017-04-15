var Node = function(value) {
  this.value = value;
  this.next = null;
};

var nodeA = new Node(1);
var nodeB = new Node(2);
var nodeC = new Node(3);
nodeA.next = nodeB;
nodeB.next = nodeC;

function printNodes(head) {
  var nodes = [];
  while (head.next) {
    nodes.push(head.value);
    head = head.next;
  }
  nodes.push(head.value);
  var printout = nodes.join('-->');
  console.log(printout);
  return printout;
}

printNodes(nodeA);

function linkedListReversal(head) {
  var prev = null;
  var current = head;
  var next = current.next;
  while (current.next) {
    console.log(current.value);
    current.next = prev;
    prev = current;
    current = next;
    next = current.next;
  }
  current.next = prev;
  return head;
}

function linkedListReversalRecursive(head) {
  if (!head.next) return head;
  var next = linkedListReversalRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return next;
}

var ans = linkedListReversalRecursive(nodeA);
console.log(ans);
printNodes(nodeC);
