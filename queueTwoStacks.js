function Queue() {
  this.inbox = [];
  this.outbox = [];
}

Queue.prototype.enqueue = function(val) {
  this.inbox.push(val);
};

Queue.prototype.dequeue = function() {
  if (this.outbox.length === 0) {
    
    while (this.inbox.length) {
      
      let temp = this.inbox.pop();
      this.outbox.push(temp);

    }
  }

  return this.outbox.pop();
};

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());