const task = () => {
  let [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  arr.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);
  let ans = 0;
  let time = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i][0] < time) continue;
    time = arr[i][1];
    ans++;
  }
  console.log(ans);
};

task();
