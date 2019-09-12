/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let current = null;
  let head = null;

  while (l1 || l2 || carry) {
    let value = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry;

    const newval = value % 10;
    let node = new ListNode(newval);

    carry = value >= 10 ? 1 : 0;

    if (!current) {
      current = node;
      head = node;
    } else {
      current.next = node;
      current = current.next;
    }

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head;
};
