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

const tomato = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const height = input[0][2];
  const col = input[0][1];
  const row = input[0][0];
  const dir = [
    [0, 0, 0, 0, 1, -1],
    [1, 0, -1, 0, 0, 0],
    [0, 1, 0, -1, 0, 0],
  ];
  input.shift();
  let queue = new Queue();
  let ripe = 0;
  let i = 0;
  let j = 0;
  let lastDate = 0;
  let arr = new Array(height);
  while (i < height * col) {
    arr[j++] = input.slice(i, i + col);
    i += col;
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < col; j++) {
      for (let k = 0; k < row; k++) {
        if (arr[i][j][k] === 1) queue.enQueue([i, j, k]);
        if (arr[i][j][k] !== -1) ripe++;
      }
    }
  }
  while (!queue.ifEmpty()) {
    let size = queue.size;
    for (let i = 0; i < size; i++) {
      let cur = queue.deQueue();
      lastDate = arr[cur[0]][cur[1]][cur[2]];
      ripe--;
      for (let j = 0; j < 6; j++) {
        let coord = [
          cur[0] + dir[0][j],
          cur[1] + dir[1][j],
          cur[2] + dir[2][j],
        ];
        if (
          coord[0] < 0 ||
          coord[0] >= height ||
          coord[1] < 0 ||
          coord[1] >= col ||
          coord[2] < 0 ||
          coord[2] >= row
        )
          continue;
        if (arr[coord[0]][coord[1]][coord[2]] !== 0) continue;
        arr[coord[0]][coord[1]][coord[2]] = arr[cur[0]][cur[1]][cur[2]] + 1;
        queue.enQueue([coord[0], coord[1], coord[2]]);
      }
    }
  }
  if (ripe > 0) console.log(-1);
  else console.log(lastDate - 1);
};

tomato();
