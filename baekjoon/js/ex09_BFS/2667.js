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
  deQueue(data) {
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

const danjiBFS = (arr, i, j, n) => {
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let size = 0;
  let queue = new Queue();
  queue.enQueue([i, j]);
  arr[i][j] = 2;

  while (!queue.ifEmpty()) {
    let cur = queue.deQueue();
    for (let k = 0; k < 4; k++) {
      let coord = [cur[0] + dir[k][0], cur[1] + dir[k][1]];
      if (coord[0] < 0 || coord[0] >= n || coord[1] < 0 || coord[1] >= n)
        continue;
      if (arr[coord[0]][coord[1]] !== 1) continue;
      queue.enQueue(coord);
      arr[coord[0]][coord[1]] = 2;
    }
    size++;
  }
  return size;
};

const danjiNum = () => {
  let [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  n = Number(n);
  arr = arr.map((v) => v.split("").map(Number));
  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) ans.push(danjiBFS(arr, i, j, n));
    }
  }
  console.log(`${ans.length}\n${ans.sort((a, b) => a - b).join("\n")}`);
};

danjiNum();
