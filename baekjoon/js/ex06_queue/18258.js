class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  enQueue(data) {
    let node = new Node(data);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  deQueue() {
    if (this.ifEmpty()) return -1;
    let tmp = this.head.next;
    this.head.next = tmp.next;
    tmp.next.prev = this.head;
    this.size--;
    return tmp.data;
  }
  returnSize() {
    return this.size;
  }
  ifEmpty() {
    return this.size ? 0 : 1;
  }
  returnFront() {
    if (this.ifEmpty()) return -1;
    return this.head.next.data;
  }
  returnBack() {
    if (this.ifEmpty()) return -1;
    return this.tail.prev.data;
  }
}

const queue = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  let q = new Queue();

  let ans = [];
  for (let str of input) {
    let tmp = str.split(" ");
    switch (tmp[0]) {
      case "push":
        q.enQueue(parseInt(tmp[1]));
        break;
      case "pop":
        ans.push(q.deQueue());
        break;
      case "size":
        ans.push(q.returnSize());
        break;
      case "empty":
        ans.push(q.ifEmpty());
        break;
      case "front":
        ans.push(q.returnFront());
        break;
      case "back":
        ans.push(q.returnBack());
        break;
      default:
        break;
    }
  }
  console.log(ans.join("\n"));
};

queue();
