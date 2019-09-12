function splitList(head) {
  let fast = head.next;
  let slow = head;

  while (fast) {
    fast = fast.next;
    if (fast) {
      fast = fast.next;
      slow = slow.next;
    }
  }

  let mid = slow.next;
  slow.next = null;

  return [head, mid];
}

function printNodes(head) {
  let result = [];
  while (head) {
    result.push(head.data);
    head = head.next;
  }
  console.log(result.join("-->"));
}

function mergeLists(left, right) {
  if (!left) return right;
  if (!right) return left;

  let head = null;
  if (left.data < right.data) {
    head = left;
    left = left.next;
  } else {
    head = right;
    right = right.next;
  }

  let current = head;
  while (left && right) {
    let temp = null;
    if (left.data < right.data) {
      temp = left;
      left = left.next;
    } else {
      temp = right;
      right = right.next;
    }
    current.next = temp;
    current = temp;
  }

  if (left) {
    current.next = left;
  }
  
  if (right) {
    current.next = right;
  }

  return head;
}

let merge_sort = function (head) {
  //TODO: Write - Your - Code
  if (!head || !head.next) return head;

  const [left, right] = splitList(head);
  printNodes(left)
  printNodes(right)
  return mergeLists(merge_sort(left), merge_sort(right));
};
