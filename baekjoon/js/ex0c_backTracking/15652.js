let arr;
let n, m;

const recurNandM = (k, l, ans) => {
  if (l >= n + 1) return;
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = l; i <= n; i++) {
      arr[k] = i;
      recurNandM(k + 1, i, ans);
    }
  }
};

const nAndM = () => {
  [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let ans = [];
  arr = Array.from({ length: m }, (v) => 0);
  recurNandM(0, 1, ans);
  console.log(ans.join("\n"));
};

nAndM();
