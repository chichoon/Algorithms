let n, m;
let arr;
let ans = [];
let input;

const recurNandM = (k, l) => {
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = l; i < n; i++) {
      arr[k] = input[i];
      recurNandM(k + 1, i);
    }
  }
};

const nAndM = () => {
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  [n, m] = input[0];
  input = input[1].sort((a, b) => a - b);
  arr = Array.from({ length: m }, (v) => 0);
  recurNandM(0, 0);
  console.log(ans.join("\n"));
};

nAndM();
