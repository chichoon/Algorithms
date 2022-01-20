class Queue {
  constructor(queueSize) {
    this.queue = Array.from({ length: queueSize + 1 }, () => 0);
    this.queueSize = queueSize;
    this.idxFront = 0;
    this.idxRear = 0;
  }
  enQueue(data) {
    if ((this.idxRear + 1) % this.queueSize !== this.idxFront) {
      this.idxRear = (this.idxRear + 1) % this.queueSize;
      queue[this.idxRear] = data;
    }
  }
  deQueue() {
    if (this.idxFront !== this.idxRear) {
      this.idxFront = (this.idxFront + 1) % this.queueSize;
      return queue[this.idxFront];
    }
  }
}
