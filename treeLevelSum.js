function treeLevelSum(tree, k) {
  var level = -1;
  var ind = 0;
  var sum = 0;
  while (ind < tree.length) {
    if (tree[ind] === '(') {
      level++;
      ind++;
    } else if ( tree[ind] === ')') {
      level--;
      ind++;
    } else {
      var endOfNumIndex = ind;
      while (tree[endOfNumIndex] !== ')' && tree[endOfNumIndex] !== '(') {
        endOfNumIndex++;
      }
      if (level === k) {
        sum += parseInt(tree.substr(ind, endOfNumIndex - ind), 10);
      }
      ind = endOfNumIndex;
    }
  }
  return sum;
}



function treeLevelSumCreateTree(tree, k) {
  if (tree[1] === ')') return 0;
  
  var root = createTree(tree);
  return findTreeLevelSum(root, k);
}

function createTree(tree) {
  var stack = [];
  var root = new Node(parseInt(tree[1], 10));
  stack.push(root);
  var ind = 2;
  
  while (ind < tree.length) {
    var curr = tree[ind];
    if (curr === '(') {
      if (tree[ind + 1] === ')') {
        var nullNode = new Node(null);
        if (!stack[stack.length - 1].left) {
          stack[stack.length - 1].left = nullNode;
        } else {
          stack[stack.length - 1].right = nullNode;
        }
        stack.push(nullNode);
        ind++;
      } else {
        var endOfNumIndex = ind + 1;
        while (tree[endOfNumIndex] !== ')' && tree[endOfNumIndex] !== '(') {
          endOfNumIndex++;
        } 
        var nodeValue = parseInt(tree.substr(ind + 1, endOfNumIndex - ind + 1), 10);
        var newNode = new Node(nodeValue);
        if (!stack[stack.length - 1].left) {
          stack[stack.length - 1].left = newNode;
        } else {
          stack[stack.length - 1].right = newNode;
        }
        stack.push(newNode);
        ind = endOfNumIndex;
      }
      
    } else if (curr === ')') {
      stack.pop();
      ind++;
    } 
    
  }
  return root;
}

function findTreeLevelSum(root, searchLevel) {
  var sum = 0;
  var currentLevel = [];
  var nextLevel = [];
  var treeLevel = 0;
  
  currentLevel.push(root);
  while (currentLevel.length && treeLevel < searchLevel) {
    for (var i = 0; i < currentLevel.length; i++) {
      var current = currentLevel[i];
      if (current.right) {
        nextLevel.push(current.right);
      }
      if (current.left) {
        nextLevel.push(current.left);
      }
    }
    currentLevel = nextLevel;
    nextLevel = [];
    treeLevel++;
  }
  
  for (var j = 0; j < currentLevel.length; j++) {
    sum += currentLevel[j].value;
  }
  
  return sum;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
