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

const memset = (arr) => {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      arr[i][j] = 0;
    }
  }
};

const cabbage = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  let i = 1;
  const len = input.length;
  const dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  let arr = Array(50);
  for (let j = 0; j < 50; j++) {
    arr[j] = Array.from({ length: 50 }, (v) => 0);
  }
  while (i < len) {
    let m = input[i][0];
    let n = input[i][1];
    let k = input[i++][2];
    let island = 0;
    let queue = new Queue();
    while (k--) {
      arr[input[i][0]][input[i][1]]++;
      i++;
    }
    for (let j = 0; j < m; j++) {
      for (let l = 0; l < n; l++) {
        if (arr[j][l] === 1) {
          queue.enQueue([j, l]);
          arr[j][l] = 2;
          while (!queue.ifEmpty()) {
            let cur = queue.deQueue();
            for (let a = 0; a < 4; a++) {
              let coord = [cur[0] + dir[0][a], cur[1] + dir[1][a]];
              if (
                coord[0] < 0 ||
                coord[0] >= m ||
                coord[1] < 0 ||
                coord[1] >= n
              )
                continue;
              if (arr[coord[0]][coord[1]] !== 1) continue;
              queue.enQueue([coord[0], coord[1]]);
              arr[coord[0]][coord[1]] = 2;
            }
          }
          island++;
        }
      }
    }
    console.log(island);
    memset(arr);
  }
};

cabbage();
