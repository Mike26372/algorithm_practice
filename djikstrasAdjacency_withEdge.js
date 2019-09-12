function shortestPathWithEdge(start, finish, weight, graph) {
  return findPaths(graph, start, weight)[finish - 1];
}

function findPaths(graph, start, weight) {

  var len = graph.length;
  var dist = new Array(len).fill(Infinity);
  var set = new Array(len).fill(false);
  var weightSet = new Array(len).fill(false);

  dist[start - 1] = 0;

  for (var i = 0; i < len; i++) {
  
    var minDist = minDistance(dist, set);
    set[minDist] = true;

    for (var j = 0; j < len; j++) {
      if (!set[j] 
          && graph[minDist][j] !== 0 
          && dist[minDist] !== Infinity 
          && graph[minDist][j] + dist[minDist] < dist[j]) {
        dist[j] = graph[minDist][j] + dist[minDist];
      } else if (!set[j]
                 && graph[minDist][j] === 0
                 && dist[minDist] !== Infinity
                 && weight + dist[minDist] < dist[j]
                 && !weightSet[minDist]) {
        weightSet[j] = true;
        dist[j] = weight + dist[minDist];
      }
    }
  }
  return dist;
}

function minDistance(dist, set) {
  var min = Infinity;
  var minIndex;

  for (var i = 0; i < set.length; i++) {
    if (set[i] === false && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
}


var graphMatrix = [
  [0, 2, 0, 4, 0], // 1
  [2, 0, 1, 0, 0], // 2
  [0, 1, 0, 3, 0], // 3
  [4, 0, 3, 0, 1], // 4
  [0, 0, 0, 1, 0]  // 5
];

var weightedMatrix = createWeightedMatrix(graphMatrix, 2);
console.log(weightedMatrix);



console.log(djikstrasAdjacency(weightedMatrix, 1, 4));