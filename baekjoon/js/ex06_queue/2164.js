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
    node.prev = this.tail.prev;
    node.next = this.tail;
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
  returnSize() {
    return this.size;
  }
  ifEmpty() {
    return this.size ? 0 : 1;
  }
  returnFront() {
    if (this.ifEmpty()) return -1;
    return this.head.next.data;
  }
  returnBack() {
    if (this.ifEmpty()) return -1;
    return this.tail.prev.data;
  }
}

const card = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let queue = new Queue();
  for (let i = 1; i <= input; i++) queue.enQueue(i);
  while (queue.returnSize() > 1) {
    queue.deQueue();
    queue.enQueue(queue.deQueue());
  }
  console.log(queue.head.next.data);
};

card();
