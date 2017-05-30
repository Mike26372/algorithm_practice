class PriorityQueue {
  constructor() {
    this._nodes = [];
  }

  enqueue(key, priority) {
    this._nodes.push({key, priority});
    this.sort();
  }

  dequeue() {
    return this._nodes.shift().key;
  }

  sort() {
    this._nodes.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return !this._nodes.length;
  }
}

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(name, edges) {
    this.vertices[name] = edges;
  }

  shortestPath(start, finish) {
    var queue = new PriorityQueue();
    var distances = {};
    var previous = {};
    var path = [];
    var smallest;

    // Loop through add each vertex to queue
      // Make value of the start vertex 0 and the rest INFINITY

    for (let vertex in this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (!queue.isEmpty()) {
      smallest = queue.dequeue();
      // Return path if at finish
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // Skip vertex if distance is Infinity
      if (!smallest || distances[smallest] === Infinity) {
        continue;
      }
      // Check neighbors and add back into queue if distance is lower than current
      for (var neighbor in this.vertices[smallest]) {
        let dist = distances[smallest] + this.vertices[smallest][neighbor];
        if (dist < distances[neighbor]) {
          distances[neighbor] = dist;
          previous[neighbor] = smallest;
          queue.enqueue(neighbor, dist);
        }
      }

    }

    return path;
  }
}

var test1 = new Graph();

test1.addVertex('A', {B: 7, C: 8});
test1.addVertex('B', {A: 7, F: 2});
test1.addVertex('C', {A: 8, F: 6, G: 4});
test1.addVertex('D', {F: 8});
test1.addVertex('E', {H: 1});
test1.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
test1.addVertex('G', {C: 4, F: 9});
test1.addVertex('H', {E: 1, F: 3});

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(test1.shortestPath('A', 'H').concat(['A']).reverse());
// console.log(test1.vertices);

var test2 = new Graph();

test2.addVertex('A', {B: 4, C: 3, E: 7});
test2.addVertex('B', {A: 4, C: 6, D: 5});
test2.addVertex('C', {A: 3, B: 6, D: 11, E: 8});
test2.addVertex('D', {B: 5, C: 11, E: 2, F: 2, G: 10});
test2.addVertex('E', {A: 7, C: 8, D: 2, G: 5});
test2.addVertex('F', {D: 2, G: 3});
test2.addVertex('G', {D: 10, E: 5, F: 3});

console.log(test2.shortestPath('A', 'F').concat(['A']).reverse());
