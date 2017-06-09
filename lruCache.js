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
    var newNode = new LinkedListNode(key, data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
    // return node in case node needs to be added to map
    return newNode;
  }

  insertAtTail(key, data) {
    var newNode = new LinkedListNode(key, data);
    this.insertNodeAtTail(newNode);
    return newNode;
  }

  insertNodeAtTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      node.next = null;
    }
    this.size++;
    return node;
  }

  remove(node) {
    if (!node) return;

    // if node has a prev node, connect previous node to next node (removing current)
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    // if node has a next node, connect next node to prev node (removing current)
    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail === this.tail.next;
    }

    this.size--;
    return node;
  }

  removeHead(node) {
    return this.remove(this.head);
  }

  removeTail(node) {
    return this.remove(this.tail);
  }

}

class LRUCache {

  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.cacheVals = new DoublyLinkedList();
  }

  set(key, value) {
    
    if ( this.cache.has(key) ) {
      var node = this.cache.get(key);
      node.data = value;
      this.cacheVals.remove(node);
      this.cacheVals.insertNodeAtTail(node);
    } else {
      this.evictIfNeeded();
      var node = new LinkedListNode(key, value);
      this.cacheVals.insertNodeAtTail(node);
      this.cache.set(key, node);
    }

  }

  get(key) {

    if ( this.cache.has(key) ) {
      var node = this.cache.get(key);
      this.cacheVals.remove(node);
      this.cacheVals.insertNodeAtTail(node);
      return node.data;
    } else {
      return -1;
    }

  }

  evictIfNeeded() {

    if ( this.cacheVals.size >= this.capacity ) {
      var node = this.cacheVals.removeHead();
      this.cache.delete(node.key);
    }

  }

  printCache() {

    var node = this.cacheVals.head;
    while (node) {
      console.log(`Key: ${node.key}, Value: ${node.data}`);
      node = node.next;
    }
    console.log('---------');

  }

}

var lru = new LRUCache(3);

lru.set(1, 'one');
lru.set(2, 'two');
lru.set(3, 'three');

lru.printCache();

lru.set(4, 'four');

lru.printCache();

lru.get(2);

lru.printCache();