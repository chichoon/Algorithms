let n, m;
let ans = [];
let arr;
let input;

const recurNandM = (k, l) => {
  if (k === m) ans.push(arr.join(" "));
  else if (l > n) return;
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
    .map((v) => v.split(" ").map(Number));
  [n, m] = input[0];
  input = input[1].sort((a, b) => a - b);
  arr = Array.from({ length: m }, (v) => 0);
  recurNandM(0, 0);
  console.log([...new Set(ans)].join("\n"));
};

nAndM();
