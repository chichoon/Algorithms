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
    return this.size ? false : true;
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

const bfs = (input, start, maxCol, maxRow) => {
  let queue = new Queue();
  let dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  let size = 0;
  input[start[0]][start[1]] = 2;
  queue.enQueue(start);
  while (!queue.ifEmpty()) {
    let current = queue.deQueue();
    size++;
    for (let i = 0; i < 4; i++) {
      let coord = [current[0] + dir[0][i], current[1] + dir[1][i]];
      if (
        coord[0] < 0 ||
        coord[0] >= maxCol ||
        coord[1] < 0 ||
        coord[1] >= maxRow
      )
        continue;
      if (!(input[coord[0]][coord[1]] === 1)) continue;
      input[coord[0]][coord[1]] = 2;
      queue.enQueue([coord[0], coord[1]]);
    }
  }
  return size;
};

const drawing = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const col = input[0][0];
  const row = input[0][1];
  input.shift();
  let max = 0;
  let n = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (input[i][j] === 1) {
        let tmp = bfs(input, [i, j], col, row);
        if (tmp > max) max = tmp;
        n++;
      }
    }
  }
  console.log(`${n}\n${max}`);
};

drawing();
