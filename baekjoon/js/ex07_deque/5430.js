const { reverse } = require("dns");

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Deque {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  pushBack(data) {
    let node = new Node(data);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  popFront() {
    if (this.empty()) return -1;
    let tmp = this.head.next;
    this.head.next = tmp.next;
    tmp.next.prev = this.head;
    this.size--;
    return tmp.data;
  }
  popBack() {
    if (this.empty()) return -1;
    let tmp = this.tail.prev;
    this.tail.prev = tmp.prev;
    tmp.prev.next = this.tail;
    this.size--;
    return tmp.data;
  }
  empty() {
    return this.size ? 0 : 1;
  }
  returnStr(errFlag, reverseFlag) {
    if (errFlag) return "error";
    let tmp = reverseFlag ? this.tail.prev : this.head.next;
    let arr = [];
    if (reverseFlag) {
      while (tmp != this.head) {
        arr.push(tmp.data);
        tmp = tmp.prev;
      }
    } else {
      while (tmp != this.tail) {
        arr.push(tmp.data);
        tmp = tmp.next;
      }
    }
    return "[" + arr.join(",") + "]";
  }
  findElement(n) {
    if (this.empty()) return -1;
    let tmp = this.head.next;
    let idx = 1;
    while (tmp.data !== n) {
      tmp = tmp.next;
      idx++;
    }
    return idx;
  }
}

const ac = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const t = parseInt(input[0]);
  input.shift();
  let ans = [];
  for (let i = 0; i < t; i++) {
    let reverseFlag = false;
    let errFlag = false;
    let deq = new Deque();
    let func = input[i * 3];
    let arrLen = parseInt(input[i * 3 + 1]);
    if (arrLen)
      input[i * 3 + 2]
        .slice(1, -1)
        .split(",")
        .forEach((v) => deq.pushBack(parseInt(v)));
    for (let j of func) {
      switch (j) {
        case "R":
          reverseFlag = reverseFlag === true ? false : true;
          break;
        case "D":
          deq.empty()
            ? (errFlag = true)
            : reverseFlag
            ? deq.popBack()
            : deq.popFront();
          break;
      }
      if (errFlag) break;
    }
    ans.push(deq.returnStr(errFlag, reverseFlag));
  }
  console.log(ans.join("\n"));
};

ac();
