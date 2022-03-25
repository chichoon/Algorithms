let n, m, arr;

const recurNandM = (k, ans) => {
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = 1; i <= n; i++) {
      arr[k] = i;
      recurNandM(k + 1, ans);
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
  recurNandM(0, ans);
  console.log(ans.join("\n"));
};

nAndM();
