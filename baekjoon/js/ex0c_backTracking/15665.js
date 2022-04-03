let n, m;
let arr;
let ans = [];
let input;

const recurNandM = (k) => {
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = 0; i < n; i++) {
      arr[k] = input[i];
      recurNandM(k + 1);
    }
  }
};

const nAndM = () => {
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  [n, m] = input[0];
  input = input[1].sort((a, b) => a - b);
  arr = Array.from({ length: m }, (v) => 0);
  recurNandM(0);
  ans = [...new Set(ans)];
  console.log(ans.join("\n"));
};

nAndM();
