function mergeSortLL(head) {
  if (!head || !head.next) return head;

  let [left, right] = getHalves(head);
  let leftSorted = mergeSortLL(left);
  let rightSorted = mergeSortLL(right);

  return mergeLists(leftSorted, rightSorted);
}

function getHalves(head) {
  let left = null;
  let right = null;
  if (!head || !head.next) {
    return [left, right];
  }

  let slow = head;
  let fast = head.next;
  while (fast) {
    fast = fast.next;
    if (fast) {
      slow = slow.next;
      fast = fast.next;
    }
  }

  let temp = slow.next;
  // Remove reference to second half of list
  slow.next = null;

  return [head, temp];
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function mergeLists(left, right) {
  // Return if one of the lists is null
  if (!left) return right;
  if (!right) return left;

  // Create head of new list to be created
  let newList = null;
  // Set first value of newList as lowest value of two sorted lists
  // move list selected to next node
  if (left.value <= right.value) {
    newList = left;
    left = left.next;
  } else {
    newList = right;
    right = right.next;
  }

  // Set current equal to the head of the new list
  let current = newList;
  // Loop through list, setting lower value equal to next and moving current forward
  while (left && right) {
    let temp;
    if (left.value <= right.value) {
      temp = left;
      left = left.next;
    } else {
      temp = right;
      right = right.next;
    }

    current.next = temp;
    // current = current.next;
    current = temp;
  }

  // If nodes exist in one of the lists, connect that list onto the end of the newly created list
  if (left) {
    current.next = left;
  } else if (right) {
    current.next = right;
  }

  return newList;
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

// console.log(getHalves(nodeA));

let merged = mergeSortLL(nodeA);
printNodes(merged);



