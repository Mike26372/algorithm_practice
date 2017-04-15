function shortestPathWithEdge(start, finish, weight, graph) {
  var minimum = Infinity;
  var startIndex = start - 1;
  var finishIndex = finish - 1;
    
  var innerRecurse = function(graph, current, count, visited, weightUsed) {
    if (current === startIndex && count > 0) return;
    if (current === finishIndex) {
      minimum = Math.min(minimum, count);
      return;
    }
    if (count > minimum) return;
    
    graph[current].forEach((distance, index) => {
      var temp = count;
      var visitedTemp = visited.slice();
      if (distance > 0 && index !== current && !visited[index]) {
        temp += distance;
        visitedTemp[current] = 1;
        innerRecurse(graph, index, temp, visitedTemp, weightUsed);
      } else if (!weightUsed) {
        temp += weight;
        visitedTemp[current] = 1;
        innerRecurse(graph, index, temp, visitedTemp, true);
      } else {
        return;
      }
    });

    return;
  };
  
  var visited = new Array(graph.length).fill(0);

  innerRecurse(graph, start - 1, 0, visited, false);
  
  return minimum;
}

var testGraph = [
  [0, 2, 0, 4, 0],
  [2, 0, 1, 0, 0], 
  [0, 1, 0, 3, 0], 
  [4, 0, 3, 0, 1], 
  [0, 0, 0, 1, 0]
];

console.log(shortestPathWithEdge(1, 4, 2, testGraph));