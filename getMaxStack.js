function Stack() {
  // initialize an empty array
  this.items = [];
  this.currentMax = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
  
  if (this.currentMax.length === 0) {
    this.currentMax.push(item);
  } else if (this.currentMax[this.currentMax.length - 1] < item) {
    this.currentMax.push(item);
  } 
};

// remove the last item
Stack.prototype.pop = function() {
  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
    return null;
  }

  let popped = this.items.pop();
  if (popped === this.currentMax[this.currentMax.length - 1]) this.currentMax.pop();

  return popped;
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
};

Stack.prototype.getMax = function() {
  if (this.currentMax.length === 0) {
    return null;
  }

  return this.currentMax[this.currentMax.length - 1];
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(2);

console.log(stack.getMax());

stack.pop();
stack.pop();

console.log(stack.getMax());
