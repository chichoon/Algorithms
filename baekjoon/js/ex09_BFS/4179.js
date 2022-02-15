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

const jihoonMove = (fireArr, jihoonArr, row, col, jihoonPos) => {
  let queue = new Queue();
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  queue.enQueue(jihoonPos);
  jihoonArr[jihoonPos[0]][jihoonPos[1]] = 1;
  while (!queue.ifEmpty()) {
    let cur = queue.deQueue();
    for (let i = 0; i < 4; i++) {
      let coord = [cur[0] + dir[0][i], cur[1] + dir[1][i]];
      if (coord[0] < 0 || coord[0] >= row || coord[1] < 0 || coord[1] >= col) {
        console.log(jihoonArr[cur[0]][cur[1]]);
        return;
      }
      if (!(jihoonArr[coord[0]][coord[1]] === ".")) continue;
      if (jihoonArr[cur[0]][cur[1]] + 1 > fireArr[coord[0]][coord[1]]) continue;
      jihoonArr[coord[0]][coord[1]] = jihoonArr[cur[0]][cur[1]] + 1;
      queue.enQueue([coord[0], coord[1]]);
    }
  }
  console.log("IMPOSSIBLE");
};

const fireMove = (fireArr, row, col) => {
  let queue = new Queue();
  let jihoon;
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (fireArr[i][j] === "F") {
        queue.enQueue([i, j]);
        fireArr[i][j] = 0;
      } else if (fireArr[i][j] === "J") jihoon = [i, j];
    }
  }
  while (!queue.ifEmpty()) {
    let size = queue.size;
    for (let i = 0; i < size; i++) {
      let cur = queue.deQueue();
      for (let j = 0; j < 4; j++) {
        let coord = [cur[0] + dir[0][j], cur[1] + dir[1][j]];
        if (coord[0] < 0 || coord[0] >= row || coord[1] < 0 || coord[1] >= col)
          continue;
        if (
          !(
            fireArr[coord[0]][coord[1]] === "." ||
            fireArr[coord[0]][coord[1]] === "J"
          )
        )
          continue;
        fireArr[coord[0]][coord[1]] = fireArr[cur[0]][cur[1]] + 1;
        queue.enQueue([coord[0], coord[1]]);
      }
    }
  }
  return jihoon;
};

const fire = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const row = parseInt(input[0].split(" ")[0]);
  const col = parseInt(input[0].split(" ")[1]);
  input.shift();
  let fireArr = input.map((n) => n.split(""));
  let jihoonArr = input.map((n) => n.split(""));
  const jihoon = fireMove(fireArr, row, col);
  jihoonMove(fireArr, jihoonArr, row, col, jihoon);
};

fire();
