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

const sangeunMove = (fireArr, sangeunArr, row, col, sangeunPos) => {
  let queue = new Queue();
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  queue.enQueue(sangeunPos);
  sangeunArr[sangeunPos[0]][sangeunPos[1]] = 1;
  while (!queue.ifEmpty()) {
    let cur = queue.deQueue();
    for (let i = 0; i < 4; i++) {
      let coord = [cur[0] + dir[0][i], cur[1] + dir[1][i]];
      if (coord[0] < 0 || coord[0] >= col || coord[1] < 0 || coord[1] >= row)
        return sangeunArr[cur[0]][cur[1]];
      if (!(sangeunArr[coord[0]][coord[1]] === ".")) continue;
      if (sangeunArr[cur[0]][cur[1]] + 1 > fireArr[coord[0]][coord[1]])
        continue;
      sangeunArr[coord[0]][coord[1]] = sangeunArr[cur[0]][cur[1]] + 1;
      queue.enQueue([coord[0], coord[1]]);
    }
  }
  return "IMPOSSIBLE";
};

const fireMove = (fireArr, row, col) => {
  let queue = new Queue();
  let sangeun;
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (fireArr[i][j] === "*") {
        queue.enQueue([i, j]);
        fireArr[i][j] = 0;
      } else if (fireArr[i][j] === "@") sangeun = [i, j];
    }
  }

  while (!queue.ifEmpty()) {
    let size = queue.size;
    for (let i = 0; i < size; i++) {
      let cur = queue.deQueue();
      for (let j = 0; j < 4; j++) {
        let coord = [cur[0] + dir[0][j], cur[1] + dir[1][j]];
        if (coord[0] < 0 || coord[0] >= col || coord[1] < 0 || coord[1] >= row)
          continue;
        if (
          !(
            fireArr[coord[0]][coord[1]] === "." ||
            fireArr[coord[0]][coord[1]] === "@"
          )
        )
          continue;
        fireArr[coord[0]][coord[1]] = fireArr[cur[0]][cur[1]] + 1;
        queue.enQueue([coord[0], coord[1]]);
      }
    }
  }
  return sangeun;
};

const fire = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let len = parseInt(input[0]);
  let i = 1;
  let ans = [];
  while (len--) {
    let row = parseInt(input[i].split(" ")[0]);
    let col = parseInt(input[i].split(" ")[1]);
    i++;
    let fireArr = input.slice(i, i + col).map((n) => n.split(""));
    let sangeunArr = input.slice(i, i + col).map((n) => n.split(""));
    let sangeun = fireMove(fireArr, row, col);
    ans.push(sangeunMove(fireArr, sangeunArr, row, col, sangeun));
    i += col;
  }
  console.log(ans.join("\n"));
};

fire();
