let n, m;
let arr;
let isUsed;
let ans = [];
let inputSorted;

const recurNandM = (k) => {
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = 0; i < n; i++) {
      if (!isUsed[i]) {
        arr[k] = inputSorted[i];
        isUsed[i] = true;
        recurNandM(k + 1);
        isUsed[i] = false;
      }
    }
  }
};

const nAndM = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  [n, m] = input[0];
  arr = Array.from({ length: m }, (v) => 0);
  isUsed = Array.from({ length: n }, (v) => false);
  inputSorted = input[1].sort((a, b) => a - b);
  recurNandM(0);
  ans = [...new Set(ans)];
  console.log(ans.join("\n"));
};

nAndM();
