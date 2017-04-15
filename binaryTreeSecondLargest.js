function findSecondLargest(head) {

  // If next node right is a leaf with no children, current node is second largest;
  if (!head.right.right && !head.right.left) return head.value;

  // If next node right has no more right children but has a left child, find largest
  // of left child branch
  if (!head.right.right && head.right.left) return findLargest(head.right.left);

  // Else, we are not at the largest element and continue recursing
  return findSecondLargest(head.right);

}

function findLargest(head) {
  if (!head) return null;

  if (!head.right) return head.value;
  return findLargest(head.right);
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var head = new Node(10);
head.left = new Node(5);
head.right = new Node(15);
head.left.left = new Node(4);
head.left.right = new Node(6);
head.right.left = new Node(12);
head.right.right = new Node(18);

console.log(findLargest(head));
console.log(findSecondLargest(head));

head.right.right.left = new Node(17);
head.right.right.left.right = new Node(16);

console.log(findSecondLargest(head));
