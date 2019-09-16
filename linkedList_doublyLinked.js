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
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      // newNode.next = null;
    }
    this.size++;
    return newNode;
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
    return this.node;
  }

  removeHead(node) {
    return this.remove(this.head);
  }

  removeTail(node) {
    return this.remove(this.tail);
  }
}

function printNodes(startNode, reversed = false) {
  var path = [];
  var current = startNode;
  while (current) {
    path.push(current.data);
    if (!reversed) {
      current = current.next;
    } else {
      current = current.prev;
    }
  }
  console.log(path.join("-->"));
  return path;
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtHead(1, 1);
doublyLinkedList.insertAtHead(2, 2);
doublyLinkedList.insertAtHead(3, 3);

printNodes(doublyLinkedList.head);
printNodes(doublyLinkedList.tail, true);

doublyLinkedList.removeHead();

printNodes(doublyLinkedList.head);
printNodes(doublyLinkedList.tail, true);
