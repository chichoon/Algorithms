class Node {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class Heap {
  constructor() {
    this.root = new Node(null, null, null, null);
    this.tail = new Node(null, null, null, null);
    this.root.right = this.tail;
    this.tail.parent = this.root;
    this.size = 0;
  }

  upHeap(value) {
    let node = new Node(value, null, null, null);
    node.parent = this.tail.parent;
    node.right = this.tail;
    this.tail.parent = node;
    node.parent.right = node;
  }
}
