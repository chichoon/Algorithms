class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Deque {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  pushFront(data) {
    let node = new Node(data);
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }
  pushBack(data) {
    let node = new Node(data);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  popFront() {
    if (this.empty()) return -1;
    let tmp = this.head.next;
    this.head.next = tmp.next;
    tmp.next.prev = this.head;
    this.size--;
    return tmp.data;
  }
  popBack() {
    if (this.empty()) return -1;
    let tmp = this.tail.prev;
    this.tail.prev = tmp.prev;
    tmp.prev.next = this.tail;
    this.size--;
    return tmp.data;
  }
  returnSize() {
    return this.size;
  }
  empty() {
    return this.size ? 0 : 1;
  }
  returnFront() {
    if (this.empty()) return -1;
    return this.head.next.data;
  }
  returnBack() {
    if (this.empty()) return -1;
    return this.tail.prev.data;
  }
  findElement(n) {
    if (this.empty()) return -1;
    let tmp = this.head.next;
    let idx = 1;
    while (tmp.data !== n) {
      tmp = tmp.next;
      idx++;
    }
    return idx;
  }
}

const deque = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  let deq = new Deque();
  for (let i = 1; i <= input[0][0]; i++) deq.pushBack(i);
  let pushFront = 0;
  let pushBack = 0;
  let length = input[0][0];
  for (let i of input[1]) {
    let idx = deq.findElement(i);
    if (idx <= (length + 1) / 2) {
      while (deq.returnFront() !== i) {
        deq.pushBack(deq.popFront());
        pushBack++;
      }
      deq.popFront();
      length--;
    } else {
      while (deq.returnFront() !== i) {
        deq.pushFront(deq.popBack());
        pushFront++;
      }
      deq.popFront();
      length--;
    }
  }
  console.log(pushFront + pushBack);
};

deque();
