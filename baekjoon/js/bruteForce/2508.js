const candy = () => {
  const [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let curRow = 0;
  let cnt;

  for (let i = 0; i < n; i++) {
    cnt = 0;
    let [r, c] = arr[++curRow].split(" ").map(Number);
    curRow++;
    for (let j = curRow; j < curRow + r - 2; j++) {
      for (let k = 0; k < c; k++) {
        if (arr[j][k] === "v" && arr[j + 1][k] === "o" && arr[j + 2][k] === "^")
          cnt++;
      }
    }

    for (let k = 0; k < c - 2; k++) {
      for (let j = curRow; j < curRow + r; j++) {
        if (arr[j][k] === ">" && arr[j][k + 1] === "o" && arr[j][k + 2] === "<")
          cnt++;
      }
    }
    curRow += r;
    console.log(cnt);
  }
};

candy();
