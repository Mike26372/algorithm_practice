/*
  Note: Try to solve this task in O(n) time using O(1) additional space, 
  where n is the number of elements in the list, 
  since this is what you'll be asked to do during an interview.

  Given a singly linked list of integers l and a non-negative integer k, 
  remove all elements from list l that have a value equal to k.
*/

function removeKFromList(l, k) {
  
  var curr = l;
  var head = l;
  var prev = null;
  while (curr) {
    if (curr.value !== k) {
      prev = curr;
      curr = curr.next;
      continue;
    } else {
      
      if (curr === head) {
        head = head.next;
      } else {
        prev.next = curr.next;
      }
      curr = curr.next;
    }
  }
  return head;
}
