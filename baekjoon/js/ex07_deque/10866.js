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
}

const deque = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  let deq = new Deque();
  let ans = [];
  for (let str of input) {
    let tmp = str.split(" ");
    switch (tmp[0]) {
      case "push_back":
        deq.pushBack(parseInt(tmp[1]));
        break;
      case "push_front":
        deq.pushFront(parseInt(tmp[1]));
        break;
      case "pop_front":
        ans.push(deq.popFront());
        break;
      case "pop_back":
        ans.push(deq.popBack());
        break;
      case "size":
        ans.push(deq.returnSize());
        break;
      case "empty":
        ans.push(deq.empty());
        break;
      case "front":
        ans.push(deq.returnFront());
        break;
      case "back":
        ans.push(deq.returnBack());
        break;
      default:
        break;
    }
  }
  console.log(ans.join("\n"));
};

deque();
