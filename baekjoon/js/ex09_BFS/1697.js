class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
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
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  deQueue() {
    if (this.ifEmpty()) return -1;
    let tmp = this.head.next;
    tmp.next.prev = this.head;
    this.head.next = tmp.next;
    this.size--;
    return tmp.data;
  }
  ifEmpty() {
    return this.size ? false : true;
  }
}

const hideAndSeek = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let arr = Array.from({ length: 100001 }, (n) => -1);
  let queue = new Queue();
  const dir = [-1, 1, 2];
  queue.enQueue(input[0]);
  arr[input[0]] = 0;
  while (!queue.ifEmpty()) {
    let curPos = queue.deQueue();
    if (curPos === input[1]) {
      console.log(arr[curPos]);
      return;
    }
    for (let i = 0; i < 3; i++) {
      let newPos;
      if (dir[i] === 2) newPos = curPos * 2;
      else newPos = curPos + dir[i];
      if (newPos < 0 || newPos >= 100001) continue;
      if (arr[newPos] >= 0) continue;
      arr[newPos] = arr[curPos] + 1;
      queue.enQueue(newPos);
    }
  }
  console.log(arr);
};

hideAndSeek();
