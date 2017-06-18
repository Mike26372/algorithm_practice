function Heap(comparator) {
  this.heap = [];
  this.comparator = comparator;
}

function getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

function getChildIndices(index) {
  let child2Index = (index + 1) * 2;
  return [child2Index - 1, child2Index];
}

Heap.prototype.push = function(value) {
  this.heap.push(value);
  this.bubbleUp(this.heap.length - 1);
};

Heap.prototype.bubbleUp = function(index) {
  if (index === 0) return;
  let parentIndex = getParentIndex(index);
  let parent = this.heap[parentIndex];
  let current = this.heap[index];

  if (this.comparator(current, parent)) {
    let temp = this.heap[parentIndex];
    this.heap[parentIndex] = this.heap[index];
    this.heap[index] = parent;
    this.bubbleUp(parentIndex);
  }

  return;
};

// Removes head of heap
Heap.prototype.pop = function() {
  // Save first element within heap to return later
  let result = this.heap[0];
  // Get element at end of heap
  let end = this.heap.pop();
  // If elements still exist within heap, sink down last element to reset heap
  if (this.heap.length > 0) {
    this.heap[0] = end;
    this.sinkDown(0);
  }
  // return first element
  return result;
};

Heap.prototype.sinkDown = function(index) {
  let [child1Index, child2Index] = getChildIndices(index);
  let length = this.heap.length;
  let swapIndex = null;

  let parent = this.heap[index];
  let child1 = this.heap[child1Index];
  let child2 = this.heap[child2Index];

  if (child1Index < length) {
    if (!this.comparator(parent, child1)) {
      swapIndex = child1Index;
    }
  }

  if (child2Index < length) {
    if (!this.comparator(swapIndex === null ? parent : child1, child2)) {
      swapIndex = child2Index;
    }
  }

  if (swapIndex === null) return;

  let temp = this.heap[index];
  this.heap[index] = this.heap[swapIndex];
  this.heap[swapIndex] = temp;
  this.sinkDown(swapIndex);
};

Heap.prototype.getHeap = function() {
  return this.heap[0];
};

Heap.prototype.size = function() {
  return this.heap.length;
};