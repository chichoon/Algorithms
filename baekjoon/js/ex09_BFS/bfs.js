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
    return this.size ? false : true;
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

const bfs = () => {
  const size = 10; //탐색할 배열 크기
  let arr = new Array(size);
  for (let i = 0; i < size; i++)
    arr[i] = Array.from({ length: size }, (v) => false);
  //탐색할 배열 선언 (10 * 10) 및 방문여부 초기화
  let dir = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ]; //상하좌우 가중치
  let queue = new Queue(); //큐 선언
  arr[0][0] = true; //첫 번째 좌표 방문
  queue.enQueue([0, 0]); //첫 번째 좌표 enQueue
  while (!queue.ifEmpty()) {
    let current = queue.deQueue(); //큐 안에 있는 좌표 꺼냄
    console.log(current); //꺼낸 좌표 출력 (없어도 됨)
    for (let i = 0; i < 4; i++) {
      //상하좌우 탐색
      //아까의 상하좌우 가중치를 사용한다
      //가중치가 y + 1, x + 0이면 아래
      //가중치가 y + 0, x + 1이면 오른쪽
      //가중치가 y - 1, x + 0이면 위
      //가중치가 y + 0, x - 1이면 왼쪽
      let coord = [current[0] + dir[0][i], current[1] + dir[1][i]];
      //인근 원소의 좌표 만들기
      if (coord[0] < 0 || coord[0] >= size || coord[1] < 0 || coord[1] >= size)
        continue; //좌표값이 음수이거나 최대값을 넘어설 경우 다음 좌표로 넘어감
      if (arr[coord[0]][coord[1]]) continue; //해당 좌표가 이미 방문한 좌표일 경우 다음 좌표로 넘어감
      arr[coord[0]][coord[1]] = true; //좌표 방문 여부 true로 설정
      queue.enQueue([coord[0], coord[1]]); //큐에 좌표 enQueue
    } //상하좌우에 대해 위의 반복문 반복
  } //최종적으로 큐가 빌 때까지 일련의 과정 반복
};

bfs();
