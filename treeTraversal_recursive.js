function Node(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

function inOrder(head) {
  const result = [];
  function inOrderRec(node) {
    if (!node) return;

    inOrderRec(node.left);
    result.push(node.value);
    inOrderRec(node.right);
  }
  inOrderRec(head);
  return result;
}

function preOrder(head) {
  const result = [];
  function preOrderRec(node) {
    if (!node) return;

    result.push(node.value);
    preOrderRec(node.left);
    preOrderRec(node.right)
  }

  preOrderRec(head);
  return result;
}

function postOrder(head) {
  const result = [];
  function postOrderRec(node) {
    if (!node) return;

    postOrderRec(node.left)
    postOrderRec(node.right)
    result.push(node.value)
  }

  postOrderRec(head);
  return result;
}

function depthFirst(head) {
  const result = [];
  function depthFirstRec(node) {
    
  }
}

const testHead = new Node(1);
testHead.left = new Node(2);
testHead.right = new Node(3);
testHead.left.left = new Node(4);
testHead.left.right = new Node(5);

const inOrderResult = inOrder(testHead)
const preOrderResult = preOrder(testHead)
const postOrderResult = postOrder(testHead)

console.log(inOrderResult)
console.assert(inOrderResult.join('') === '42513')
console.log(preOrderResult)
console.assert(preOrderResult.join('') === '12453')
console.log(postOrderResult)
console.assert(postOrderResult.join('') === '45231')
