function getClosestNode(head, targetValue) {
  let minValueSoFar = Number.MAX_VALUE;
  // let stack = [];
  // stack.push(head);
  let closestNode = null;
  let currentNode = head;
  
  while (currentNode) {
    let currentValue = currentNode.value;
    let absValue = Math.abs(currentValue - targetValue);

    if (currentValue === targetValue) {
      return currentNode;
    }

    if (absValue < minValueSoFar) {
      minValueSoFar = absValue;
      closestNode = currentNode;
    }

    if (targetValue < currentValue) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return closestNode;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}