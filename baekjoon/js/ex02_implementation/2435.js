const condition = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const k = input[0][1];
  const n = input[0][0];
  let max = -999999;
  for (let i = 0; i <= n - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += input[1][j];
    }
    if (sum > max) max = sum;
  }
  console.log(max);
};

condition();
