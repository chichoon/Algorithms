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

const area = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const m = input[0][0];
  const n = input[0][1];
  const k = input[0][2];
  const dir = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  input.shift();
  let arr = new Array(m);
  for (let i = 0; i < m; i++) arr[i] = Array.from({ length: n }, (z) => false);
  for (let i = 0; i < k; i++) {
    for (let j = input[i][1]; j < input[i][3]; j++) {
      for (let l = input[i][0]; l < input[i][2]; l++) arr[j][l] = true;
    }
  }
  let ans = [];
  let queue = new Queue();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!arr[i][j]) {
        let size = 0;
        queue.enQueue([i, j]);
        arr[i][j] = true;
        while (!queue.ifEmpty()) {
          let cur = queue.deQueue();
          size++;
          for (let a = 0; a < 4; a++) {
            let coord = [cur[0] + dir[0][a], cur[1] + dir[1][a]];
            if (coord[0] < 0 || coord[0] >= m || coord[1] < 0 || coord[1] >= n)
              continue;
            if (arr[coord[0]][coord[1]]) continue;
            queue.enQueue([coord[0], coord[1]]);
            arr[coord[0]][coord[1]] = true;
          }
        }
        ans.push(size);
      }
    }
  }
  console.log(`${ans.length}\n${ans.sort((a, b) => a - b).join(" ")}`);
};

area();
