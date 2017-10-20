function TaskRunner(concurrency) { 
    /* TODO */ 
    this.concurrency = concurrency;
    this.size = 0;
    this.queue = [];
}

TaskRunner.prototype.push = function push(task, priority) { 
    /* TODO */ 
    if (this.size < this.concurrency) {
        task(this.done.bind(this), priority);
        this.size++;
    } else {
        console.log('wait');
        this.insertInto({task, priority});
    }
}

TaskRunner.prototype.done = function() {
    if (this.queue.length > 0) {
        let {task, priority} = this.queue.shift();
        task(this.done.bind(this), priority);
    } else {
        this.size--;
        return;
    }
}

TaskRunner.prototype.insertInto = function(taskObj) {
    let {task, priority} = taskObj;
    if (this.queue.length === 0) {
        this.queue.push(taskObj);
        return;
    }
    for (var i = 0; i < this.queue.length; i++) {
        let currTask = this.queue[i];
        if (priority < currTask.priority) {
            this.queue.splice(i, 0, taskObj);
            return;
        } 
    }
    this.queue.push(taskObj);
}

function exampleSimpleTask(done, priority) {
  console.log(priority);
  setTimeout(done, Math.random() * 1000);
}

var r = new TaskRunner(3);
// use the exampleSimpleTask from above;

r.push(exampleSimpleTask, 1); // executes immediately
r.push(exampleSimpleTask, 1); // executes immediately
r.push(exampleSimpleTask, 1); // executes immediately
r.push(exampleSimpleTask, 4); // should wait until one of the running tasks completes
r.push(exampleSimpleTask, 3); // should wait until one of the running tasks completes
r.push(exampleSimpleTask, 5); // should wait until one of the running tasks completes
// ...

