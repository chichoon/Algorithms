let n, m;
let arr;
let ans = [];
let inputSorted;

const recurNandM = (k, l) => {
  if (l > n + 1) return;
  else if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = l; i < n; i++) {
      arr[k] = inputSorted[i];
      recurNandM(k + 1, i + 1);
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
  inputSorted = input[1].sort((a, b) => a - b);
  recurNandM(0, 0);
  ans = [...new Set(ans)];
  console.log(ans.join("\n"));
};

nAndM();
