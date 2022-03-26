let arr;
let ans;
let n, m;
let isUsed;
let ref;

const recurNandM = (k) => {
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = 0; i < n; i++) {
      if (!isUsed[i]) {
        arr[k] = ref[i];
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
  ref = input[1].sort((a, b) => a - b);
  isUsed = Array.from({ length: n }, (v) => false);
  arr = Array.from({ length: m }, (v) => 0);
  ans = [];
  recurNandM(0);
  console.log(ans.join("\n"));
};

nAndM();
