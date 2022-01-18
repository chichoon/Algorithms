class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  insertFront(data) {
    let node = new Node(data);

    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  insertLast(data) {
    let node = new Node(data);
    let currentNode;

    if (!this.head) this.head = node;
    else {
      currentNode = this.head;
      while (currentNode.next !== this.tail) currentNode = currentNode.next;
    }
    node.prev = currentNode;
    node.next = this.tail;
    this.tail.prev = node;
    currentNode.next = node;
    this.size++;
  }
  insertNext(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }
    let node = new Node(data);
    let currentNode;
    let count = 0;

    currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    node.next = currentNode.next;
    node.prev = currentNode;
    node.next.prev = node;
    currentNode.next = node.next;
    this.size++;
  }
  deleteThis(index) {
    if (index < 0 || index > this.size) return;
    let currentNode;
    let count = 0;

    currentNode = this.head.next;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    this.size--;
  }
  printAll() {
    let currentNode = this.head;

    if (currentNode) process.stdout.write(currentNode.data);
    while (currentNode.next) {
      currentNode = currentNode.next;
      process.stdout.write(currentNode.data);
    }
  }
}

export { Node, LinkedList };
