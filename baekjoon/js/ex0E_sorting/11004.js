const numK = () => {
  let [[n, k], arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  console.log(arr.sort((a, b) => a - b)[k - 1]);
};

numK();
