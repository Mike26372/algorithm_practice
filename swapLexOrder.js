function swapLexOrder(str, pairs) {
  var len = str.length;
  var matrix = new Array(len).fill(0).map(row => new Array(len).fill(0));
  var visited = new Array(len).fill(false);
  var strArr = str.split('');
  var strResult = strArr.slice();
  
  pairs.forEach(pair => {
    matrix[pair[0] - 1][pair[1] - 1] = 1;
    matrix[pair[1] - 1][pair[0] - 1] = 1;
  });
  
  var paths = [];
  
  for (var i = 0; i < len; i++) {
    if (!visited[i]) {
      var newPath = getPath(i, visited, matrix);
      if (newPath.length > 1) {
        paths.push(newPath);
      }
    }
  }
  
  var sortedPaths = paths.map(path => path.slice().sort((a, b) => str.charCodeAt(a) > str.charCodeAt(b) ? -1 : 1));
  
  for (var i = 0; i < paths.length; i++) {
    for (var j = 0; j < paths[i].length; j++) {
      strResult[paths[i][j]] = strArr[sortedPaths[i][j]];
    }
  }
  
  return strResult.join('');
}

function getPath(start, visited, matrix) {
  var stack = [];
  var added = {};
  var path = [];
  stack.push(start);
  
  while (stack.length) {
    
    var current = stack.pop();
    if (!added.hasOwnProperty(current)) {
      path.push(current);
      added[current] = 1;
    }
    visited[current] = true;
    
    for (var i = 0; i < visited.length; i++) {
      if (!visited[i] && matrix[current][i]) {
        stack.push(i);
      }
    }
    
  }
  
  return path.sort((a, b) => a - b);
}


