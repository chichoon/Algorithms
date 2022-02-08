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
  ifEmpty() {
    return this.size ? false : true;
  }
  returnFront() {
    if (this.ifEmpty()) return -1;
    return this.head.next.data;
  }
  ifBigger() {
    if (this.ifEmpty()) return false;
    const data = this.head.next.data[0];
    let tmp = this.head.next.next;
    while (tmp !== this.tail) {
      if (tmp.data[0] > data) return true;
      tmp = tmp.next;
    }
    return false;
  }
}

const printer = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  let ans = [];
  for (let i = 0; i < input.length; i++) {
    let count = 1;
    let q = new Queue();
    const docToFind = input[i++][1];
    for (let j = 0; j < input[i].length; j++) q.enQueue([input[i][j], j]);
    while (q.size) {
      if (q.ifBigger()) q.enQueue(q.deQueue());
      else {
        let tmp = q.deQueue();
        if (tmp[1] === docToFind) {
          ans.push(count);
          break;
        }
        count++;
      }
    }
  }
  console.log(ans.join("\n"));
};

printer();
