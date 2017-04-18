function detectCycle(head) {
  var hare = head;
  var tortoise = head;

  // Base cases
  if (!head) return null;
  if (!head.next) return false;

  while (tortoise) {
    tortoise = tortoise.next;
    if (hare.next) {
      hare = hare.next.next;
    } else {
      break;
    }
    if (tortoise === hare) return true;
  }

  return false;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

console.log(detectCycle(node1)); // true

node5.next = null;

console.log(detectCycle(node1)); // false

