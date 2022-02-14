const { notDeepEqual } = require("assert");

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
}

const maze = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const col = parseInt(input[0].split(" ")[0]);
  const row = parseInt(input[0].split(" ")[1]);
  input.shift();
  input = input.map((n) => n.split("").map(Number));
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  let length;
  let queue = new Queue();
  input[0][0] = 2;
  queue.enQueue([0, 0, 0]);
  while (!queue.ifEmpty()) {
    let cur = queue.deQueue();
    if (cur[0] === col - 1 && cur[1] === row - 1) {
      length = cur[2] + 1;
      break;
    }
    for (let i = 0; i < 4; i++) {
      let coord = [cur[0] + dir[0][i], cur[1] + dir[1][i]];
      if (coord[0] < 0 || coord[0] >= col || coord[1] < 0 || coord[1] >= row)
        continue;
      if (!(input[coord[0]][coord[1]] === 1)) continue;
      input[coord[0]][coord[1]] = 2;
      queue.enQueue([coord[0], coord[1], cur[2] + 1]);
    }
  }
  console.log(length);
};

maze();
