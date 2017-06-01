function linkedListReversal(head) {
  let current = head;
  let next = head.next;
  let prev = null;

  while (current) {
    current.next = prev;
    prev = current;
    current = next;
    if (current) {
      next = current.next;
    }
  }

  return prev;
}

function linkedListReversalRec(head) {
  if (!head.next) {
    return head;
  }

  var temp = linkedListReversalRec(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
}

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
var ans = linkedListReversalRec(nodeA);
printNodes(ans);
printNodes(nodeC);