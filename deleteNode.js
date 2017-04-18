function deleteNode(list, target) {
  // Set current to head of list
  let current = list;
  while (current) {
    if (current.next.value === target) {
      // Save target node
      let temp = current.next;
      // If temp isn't at the end of the list
      if (temp.next) {
        // Link current to node after target
        current.next = current.next.next;
      } else {
        // Temp is at end of list, make current's next node null
        current.next = null;
      }
      // Return target node
      return temp;
    }

    current = current.next;
  }
  return null;
}

function deleteNodeInPlace (target) {
  if (!target.next) throw Error('Cannot delete last node in list');

  target.value = target.next.value;
  target.next = target.next.next;

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

printNodes(node1);

deleteNode(node1, 4);

printNodes(node1); // 4 should have been removed from list

deleteNode(node1, 5);

printNodes(node1); // 5 should have been removed from list

deleteNodeInPlace(node2);

printNodes(node1); // 2 should have been removed from list