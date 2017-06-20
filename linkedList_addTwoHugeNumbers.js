// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  var aRev = reverseLL(a);
  var bRev = reverseLL(b);
  var newListHead = null;
  var aCurr = aRev;
  var bCurr = bRev;
  var newListCurr = newListHead;
  var carry = 0;
  while(aCurr || bCurr) {
    var total = (aCurr ? aCurr.value : 0) + (bCurr ? bCurr.value : 0) + carry;
    var carry = Math.floor(total / 10000);
    var newValue = total % 10000;
    var newNode = new Node(newValue);
    if (newListHead) {
      newListCurr.next = newNode;
      newListCurr = newListCurr.next;
    } else {
      newListHead = newNode; 
      newListCurr = newNode;
    }
    
    if (aCurr) aCurr = aCurr.next;
    if (bCurr) bCurr = bCurr.next;
  }
  
  if (carry) {
    newListCurr.next = new Node(carry);
  }
  
  newListHead = reverseLL(newListHead);
  return mapLL(newListHead);
}

function mapLL(head) {
  var result = [];
  var curr = head;
  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  return result;
}

function Node(x) {
  this.value = x;
  this.next = null;
}

function reverseLL(head) {
  var curr = head;
  var prev = null;
  while (curr) {
    var temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}
