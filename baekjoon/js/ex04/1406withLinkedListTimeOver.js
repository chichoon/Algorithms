class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  insertLast(data) {
    let node = new Node(data);
    let currentNode;

    currentNode = this.tail.prev;
    node.prev = currentNode;
    node.next = this.tail;
    this.tail.prev = node;
    currentNode.next = node;
    this.size++;
  }
  insertLeft(data, node) {
    let newNode = new Node(data);
    newNode.next = node;
    newNode.prev = node.prev;
    node.prev.next = newNode;
    node.prev = newNode;
    this.size++;
  }
  deleteLeft(node) {
    if (node === this.head.next) return;
    node.prev = node.prev.prev;
    node.prev.next = node;
    this.size--;
  }
  printAll() {
    let currentNode = this.head.next;

    if (currentNode) process.stdout.write(currentNode.data);
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
      process.stdout.write(currentNode.data);
    }
  }
}

const editor = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let list = new LinkedList();
  const len = input.length;
  let index = 2;
  let node;

  for (let i in input[0]) {
    list.insertLast(input[0][i]);
  }
  node = list.tail;

  while (index < len) {
    switch (input[index][0]) {
      case "L":
        if (node !== list.head.next) {
          node = node.prev;
        }
        break;
      case "D":
        if (node !== list.tail) {
          node = node.next;
        }
        break;
      case "B":
        if (node !== list.head.next) {
          list.deleteLeft(node);
        }
        break;
      case "P":
        list.insertLeft(input[index][2], node);
        break;
    }
    index++;
  }
  list.printAll();
};

editor();
