const coin = () => {
  let [[n, k], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > k) continue;
    ans += Math.floor(k / arr[i]);
    k %= arr[i];
  }
  console.log(ans);
};

coin();
