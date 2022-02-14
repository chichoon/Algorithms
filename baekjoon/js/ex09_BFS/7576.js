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
  const col = input[0][1];
  const row = input[0][0];
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  input.shift();
  let queue = new Queue();
  let date = -1;
  let ripe = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (input[i][j] === 1) {
        queue.enQueue([i, j]);
        input[i][j] === 2;
      }
      if (input[i][j] !== -1) ripe++;
    }
  }
  while (!queue.ifEmpty()) {
    let size = queue.size;
    for (let i = 0; i < size; i++) {
      let cur = queue.deQueue();
      ripe--;
      for (let j = 0; j < 4; j++) {
        let coord = [cur[0] + dir[0][j], cur[1] + dir[1][j]];
        if (coord[0] < 0 || coord[0] >= col || coord[1] < 0 || coord[1] >= row)
          continue;
        if (input[coord[0]][coord[1]]) continue;
        input[coord[0]][coord[1]] = 1;
        queue.enQueue([coord[0], coord[1]]);
      }
    }
    date++;
  }
  if (ripe) console.log(-1);
  else console.log(date);
};

tomato();
