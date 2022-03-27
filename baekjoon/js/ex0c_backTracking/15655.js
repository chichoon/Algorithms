let arr;
let ans;
let n, m;
let ref;

const recurNandM = (k, l) => {
  if (k === m) ans.push(arr.join(" "));
  else if (l > n + 1) return;
  else {
    for (let i = l; i < n; i++) {
      arr[k] = ref[i];
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
  ref = input[1].sort((a, b) => a - b);
  arr = Array.from({ length: m }, (v) => 0);
  ans = [];
  recurNandM(0, 0);
  console.log(ans.join("\n"));
};

nAndM();
