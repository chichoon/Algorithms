let arr;

const recurNandM = (n, m, k, isUsed, ans) => {
  if (k === m) ans.push(arr.join(" "));
  else {
    for (let i = 1; i <= n; i++) {
      if (!isUsed[i]) {
        arr[k] = i;
        isUsed[i] = true;
        recurNandM(n, m, k + 1, isUsed, ans);
        isUsed[i] = false;
      }
    }
  }
};

const nAndM = () => {
  let [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let ans = [];
  let isUsed = Array.from({ length: 10 }, (v) => false);
  arr = Array.from({ length: m }, (v) => 0);
  recurNandM(n, m, 0, isUsed, ans);
  console.log(ans.join("\n"));
};

nAndM();
