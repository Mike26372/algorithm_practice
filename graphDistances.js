function graphDistances(g, s) {
  var len = g.length;
  var dist = new Array(len).fill(Infinity);
  var visited = new Array(len).fill(false);
  
  // Set distance to self to 0
  dist[s] = 0;
  
  for (var i = 0; i < len; i++) {
    // Find node with distance from start
    var min = minDistance(dist, visited);
    // Mark node visited
    visited[min] = true;
    for (var j = 0; j < len; j++) {
      if (!visited[j]
         && g[min][j] >= 0
         && dist[min] !== Infinity
         && dist[min] + g[min][j] < dist[j]) {
        dist[j] = dist[min] + g[min][j];
      }
    }
  }
  return dist;
}

function minDistance(dist, visited) {
  var min = Infinity;
  var minIndex;
  for (var i = 0; i < dist.length; i++) {
    if (!visited[i] && dist[i] < min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
}