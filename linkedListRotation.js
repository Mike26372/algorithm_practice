function rotateLL(head, n) {

  var len = findLength(head);
  // Adjust n if its greater than the list or negative
  n = n % len;
  if (n < 0) {
    n = n + length;
  }

  // Go to node before rotation i.e. (length - n) - 1
  let rotationCount = len - n - 1;

  let index = 0;
  let temp = head;
  while (index < rotationCount) {
    temp = temp.next;
    index++;
  }
  // console.log(temp.value);
  let newHead = temp.next;
  temp.next = null;

  let newList = newHead;
  while (newList.next) {
    newList = newList.next;
  }

  newList.next = head;
  return newHead;

}

function findLength(head) {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// Create nodes
var nodeA = new Node(7);
var nodeB = new Node(3);
var nodeC = new Node(2);
var nodeD = new Node(6);
var nodeE = new Node(4);
var nodeF = new Node(5);
var nodeG = new Node(1);
var nodeH = new Node(0);

// Link nodes
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;
nodeF.next = nodeG;
nodeG.next = nodeH;

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

var newList = rotateLL(nodeA, 2);

printNodes(newList);