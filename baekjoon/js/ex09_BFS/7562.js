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

const knight = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  let i = 0;
  const len = input.length;
  const dir = [
    [1, 2, 2, 1, -1, -2, -2, -1],
    [-2, -1, 1, 2, 2, 1, -1, -2],
  ];
  let ans = [];
  while (i < len) {
    let size = input[i++][0];
    let arr = new Array(size);
    for (let j = 0; j < size; j++)
      arr[j] = Array.from({ length: size }, (n) => 0);
    let queue = new Queue();
    let start = input[i++];
    let end = input[i++];
    queue.enQueue(start);
    while (!queue.ifEmpty()) {
      let cur = queue.deQueue();
      if (cur[0] === end[0] && cur[1] === end[1]) {
        ans.push(arr[cur[0]][cur[1]]);
        break;
      }
      for (let j = 0; j < 8; j++) {
        let coord = [cur[0] + dir[0][j], cur[1] + dir[1][j]];
        if (
          coord[0] < 0 ||
          coord[0] >= size ||
          coord[1] < 0 ||
          coord[1] >= size
        )
          continue;
        if (arr[coord[0]][coord[1]]) continue;
        arr[coord[0]][coord[1]] = arr[cur[0]][cur[1]] + 1;
        queue.enQueue([coord[0], coord[1]]);
      }
    }
  }
  console.log(ans.join("\n"));
};

knight();
