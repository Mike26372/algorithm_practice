// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  var len = getLength(l);
  var half = Math.floor(len / 2);

  var index = 0;
  var stack = [];
  var current = l;
  while (index < half) {
    stack.push(current);
    current = current.next;
    index++;
  }
  
  if (len % 2 !== 0) current = current.next;
  
  while (current) {
    if (current.value !== stack.pop().value) return false;
    current = current.next;
  }
  
  return true;
}

function getLength(head) {
  var count = 0;
  var current = head;
  while (current) {
    count++;
    current = current.next;
  }
  
  return count;
}
