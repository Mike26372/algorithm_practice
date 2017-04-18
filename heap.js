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

function MedianHeap() {
  this.minHeap = new Heap((a, b) => a < b ? true : false);
  this.maxHeap = new Heap((a, b) => a > b ? true : false);
  this.length = 0;
}

MedianHeap.prototype.push = function(value) {
  // If heap length is even, push median onto top of minHeap by default
  if (this.length % 2 === 0) {
    this.minHeap.push(value);
  } else {
    this.maxHeap.push(value);
  }
  let maxHeapHead = this.maxHeap.getHeap();
  let minHeapHead = this.minHeap.getHeap();
  
  // console.log('MinHeap: ', this.minHeap.heap);
  // console.log('MaxHeap: ', this.maxHeap.heap);

  // If current elements are ordered improperly
  if (minHeapHead < maxHeapHead) {
    let min = this.minHeap.pop();
    let max = this.maxHeap.pop();
    this.minHeap.push(max);
    this.maxHeap.push(min);
  }

  this.length++;
  // Print new median
  let median = this.getMedian();
  console.log(median);
  // console.log('Adding: ', value);
  // console.log('Median: ', median);
  // console.log('MinHeap: ', this.minHeap.heap);
  // console.log('MaxHeap: ', this.maxHeap.heap);
  // console.log('--------------');
};

MedianHeap.prototype.getMedian = function() {
  let median;
  if (this.length % 2 === 0) {
    median = (this.minHeap.getHeap() + this.maxHeap.getHeap()) / 2;
  } else {
    median = this.minHeap.getHeap();
  }
  return median.toFixed(1);
};

// var minHeap = new Heap((a, b) => a < b ? true : false);

// minHeap.push(5);
// minHeap.push(6);
// minHeap.push(3);
// minHeap.push(2);
// minHeap.push(1);
// console.log(minHeap.heap);
// minHeap.pop();
// console.log(minHeap.heap);

var medianHeap = new MedianHeap();

// medianHeap.push(12);
// medianHeap.push(4);
// medianHeap.push(5);
// medianHeap.push(3);
// medianHeap.push(8);
// medianHeap.push(7);

let test = Array.from(new Array(10), (val, ind) => ind + 1);
test.forEach(val => medianHeap.push(val));