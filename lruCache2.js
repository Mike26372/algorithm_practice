class LinkedListNode {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtHead(key, data) {
    const node = new LinkedListNode(key, data);
    this.insertNodeAtHead(node);
    return node;
  }

  insertAtTail(key, data) {
    const node = new LinkedListNode(key, data);
    this.insertNodeAtTail(node);
    return node;
  }

  insertNodeAtHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  insertNodeAtTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  remove(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    this.size--;
    // Return node so it can be removed from cache by key value
    return node;
  }

  removeHead() {
    return this.remove(this.head);
  }

  removeTail() {
    return this.remove(this.tail);
  }

  print() {
    let node = this.head;
    const result = [];

    while (node) {
      console.log("key:", node.key);
      console.log("data:", node.data);
      result.push(`${node.key}: ${node.data}`);
      node = node.next;
    }

    console.log(result.join(" --> "));
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.cacheVals = new DoublyLinkedList();
  }

  get(key) {
    if (this.cache[key]) {
      const node = this.cache[key];
      this.cacheVals.remove(node);
      this.cacheVals.insertAtTail(node.key, node.data);
      return node;
    } else {
      return -1;
    }
  }

  set(key, data) {
    if (this.cache[key]) {
      let node = this.cache[key];
      // Overwriting cache value for key and placing at tail as LRU
      this.cacheVals.remove(node);
      const newNode = this.cacheVals.insertAtTail(key, data);
      this.cache[key] = newNode;
    } else {
      this.evictIfNeeded();
      const newNode = this.cacheVals.insertAtTail(key, data);
      this.cache[key] = newNode;
    }
  }

  evictIfNeeded() {
    if (this.cacheVals.size >= this.capacity) {
      const node = this.cacheVals.removeHead();
      this.cache[node.key] = undefined;
    }
  }

  print() {
    this.cacheVals.print();
  }
}

// const dll = new DoublyLinkedList();
// dll.insertAtHead("one", 1);
// dll.insertAtHead("two", 2);
// dll.insertAtTail("three", 3);
// let node4 = dll.insertAtTail("four", 4);
// dll.insertAtTail("five", 5);
// dll.insertAtTail("six", 6);
// dll.insertAtTail("seven", 7);
// dll.insertAtTail("eight", 8);

// dll.print();

// dll.removeHead();

// dll.print();

// dll.removeHead()
// dll.removeTail();

// dll.print();

// dll.remove(node4);

// dll.print();

const lru = new LRUCache(3);

lru.set("one", 1);
lru.set("two", 2);
lru.set("three", 3);
lru.print();

lru.set("four", 4);
lru.print();

lru.set("three", 5);
lru.print();

lru.get("two");
lru.print();
