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
    this.head.next = tmp.next;
    tmp.next.prev = this.head;
    this.size--;
    return tmp.data;
  }
  ifEmpty() {
    return this.size ? false : true;
  }
}

const rgb = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const size = parseInt(input[0]);
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  input.shift();
  input = input.map((n) => n.split(""));
  let colorBlind = 0;
  let notColorBlind = 0;
  let queue = new Queue();
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (input[i][j] === "B") {
        queue.enQueue([i, j]);
        input[i][j] = " ";
        colorBlind++;
        notColorBlind++;
        while (!queue.ifEmpty()) {
          let cur = queue.deQueue();
          for (let k = 0; k < 4; k++) {
            let coord = [cur[0] + dir[0][k], cur[1] + dir[1][k]];
            if (
              coord[0] < 0 ||
              coord[0] >= size ||
              coord[1] < 0 ||
              coord[1] >= size
            )
              continue;
            if (input[coord[0]][coord[1]] !== "B") continue;
            input[coord[0]][coord[1]] = " ";
            queue.enQueue([coord[0], coord[1]]);
          }
        }
      }
    }
  }
  //for not color bilnded
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (input[i][j] === "R" || input[i][j] === "G") {
        let color = input[i][j];
        queue.enQueue([i, j]);
        input[i][j] = "V";
        notColorBlind++;
        while (!queue.ifEmpty()) {
          let cur = queue.deQueue();
          for (let k = 0; k < 4; k++) {
            let coord = [cur[0] + dir[0][k], cur[1] + dir[1][k]];
            if (
              coord[0] < 0 ||
              coord[0] >= size ||
              coord[1] < 0 ||
              coord[1] >= size
            )
              continue;
            if (input[coord[0]][coord[1]] !== color) continue;
            input[coord[0]][coord[1]] = "V";
            queue.enQueue([coord[0], coord[1]]);
          }
        }
      }
    }
  }
  //for color blinded
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (input[i][j] === "V") {
        queue.enQueue([i, j]);
        input[i][j] = " ";
        colorBlind++;
        while (!queue.ifEmpty()) {
          let cur = queue.deQueue();
          for (let k = 0; k < 4; k++) {
            let coord = [cur[0] + dir[0][k], cur[1] + dir[1][k]];
            if (
              coord[0] < 0 ||
              coord[0] >= size ||
              coord[1] < 0 ||
              coord[1] >= size
            )
              continue;
            if (input[coord[0]][coord[1]] !== "V") continue;
            input[coord[0]][coord[1]] = " ";
            queue.enQueue([coord[0], coord[1]]);
          }
        }
      }
    }
  }
  console.log(`${notColorBlind} ${colorBlind}`);
};

rgb();
