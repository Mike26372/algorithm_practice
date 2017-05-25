// Codefights test
// Code below works but is not efficient enough for Google :(

function shortestPathWithEdgeRec(start, finish, weight, graph) {
  var visitedSet = new Set();
  var hash = {};
  var shortestLength = Infinity;
  
  var findPaths = function(node, length, weightUsed, visited) {
    // visited.add(node);
    visited[node] = 1;
    if (node === finish - 1) {
      shortestLength = Math.min(shortestLength, length);
    }
    
    if (length > shortestLength) return;
    for (var i = 0; i < graph[node].length; i++) {
      if (graph[node][i] && !visited.hasOwnProperty(i)) {
        var dist = graph[node][i];
        // var temp = new Set(visited);
        var temp = Object.assign({}, visited);
        findPaths(i, length + dist, weightUsed, temp);
      } else if (!weightUsed && !visited.hasOwnProperty(i)) {
        // var temp = new Set(visited);
        var temp = Object.assign({}, visited);
        findPaths(i, length + weight, true, temp);
      }
    }
  };
  
  findPaths(start - 1, 0, false, hash)
  return shortestLength;
}
