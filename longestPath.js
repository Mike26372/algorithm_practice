function longestPath(fileSystem) {
  if (!hasFile(fileSystem)) return 0;
  var treeRoot = createFileTree(fileSystem);
  return searchPaths(treeRoot);
}

function searchPaths (root) {
  if (hasFile(root.text)) {
    return root.length + root.level;
  }
  var childPaths = root.children.map(child => root.length + searchPaths(child));
  return Math.max.apply(null, childPaths);
}

function hasFile(filePath) {
  for (var i = 0; i < filePath.length; i++) {
    if (filePath[i] === '.') return true;
  }
  return false;
}

function createFileTree(files) {
  var filesArray = getFiles(files);
  var filesWithDepths = getDepths(filesArray);
  var stack = [];
  var current, currentLevel, next, nextLevel, nextText;
  
  var root = new fileNode(-1, '');
  stack.push(root);
  
  while (stack.length && filesWithDepths.length) {
    current = stack[stack.length - 1];
    currentLevel = current.level;
    
    next = filesWithDepths[0];
    nextLevel = next[0];
    nextText = next[1];
    
    if (currentLevel < nextLevel) {
      var newFileNode = new fileNode(nextLevel, nextText);
      current.children.push(newFileNode);
      stack.push(newFileNode);
      filesWithDepths.shift();
    } else if (currentLevel >= nextLevel) {
      stack.pop();
    }
    
  }
  return root;
}

function fileNode(level, text) {
  this.level = level;
  this.text = text;
  this.length = text.length;
  this.children = [];
}

function getFiles(files) {
  var stack = [''];
  var index = 0;
  while (index < files.length) {
    if (files[index] === '\r') {
      stack.push('');
    } else {
      stack[stack.length - 1] += files[index];
    }
    index++;
  }
  return stack;
}

function getDepths(filesArray) {
  return filesArray.map(file => {
    var index = 0;
    while (file[index] === '\t') {
      index++;
    }
    return [index, file.substr(index)];
  });
}


var tests = [
  'user\r\tpictures\r\tdocuments\r\t\tnotes.txt',
  'user\r\tpictures\r\t\tphoto.png\r\t\tcamera\r\tdocuments\r\t\tlectures\r\t\t\tnotes.txt'
];

tests.forEach(test => console.log(longestPath(test)));

var node = longestPath(tests[0]);
console.log(node.children[1].children[0]);
