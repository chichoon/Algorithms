let n, m;
let cctvPos;
let min = 100;
let input;
let dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let cctvDir = [
  [0],
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  [[0, 1, 2, 3]],
];

const recurCCTV = (cctvNum, cctvLimit) => {
  let i, j;
  if (cctvNum === cctvLimit) {
    let sum = 0;
    for (i = 0; i < n; i++)
      for (j = 0; j < m; j++) if (input[i][j] === 0) sum++;
    if (sum < min) min = sum;
    return;
  }
  for (let dirs of cctvDir[cctvPos[cctvNum][0]]) {
    for (let d of dirs) {
      i = cctvPos[cctvNum][1];
      j = cctvPos[cctvNum][2];
      while (1) {
        i += dir[d][0];
        j += dir[d][1];
        if (i < 0 || j < 0 || i >= n || j >= m) break;
        else if (input[i][j] === 6) break;
        else if (input[i][j] > 0 && input[i][j] < 6) continue;
        input[i][j]--;
      }
    }
    recurCCTV(cctvNum + 1, cctvLimit);
    for (let d of dirs) {
      i = cctvPos[cctvNum][1];
      j = cctvPos[cctvNum][2];
      while (1) {
        i += dir[d][0];
        j += dir[d][1];
        if (i < 0 || j < 0 || i >= n || j >= m) break;
        else if (input[i][j] === 6) break;
        else if (input[i][j] > 0 && input[i][j] < 6) continue;
        input[i][j]++;
      }
    }
  }
};

const cctv = () => {
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  [n, m] = input[0];
  cctvPos = [];
  input.shift();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (input[i][j] > 0 && input[i][j] < 6) cctvPos.push([input[i][j], i, j]);
    }
  }
  recurCCTV(0, cctvPos.length);
  console.log(min);
};

cctv();
