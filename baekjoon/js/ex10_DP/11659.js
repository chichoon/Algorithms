const sum = () => {
  let [[N, M], arr, ...ranges] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let dp = Array.from({ length: N + 1 }, (v) => 0);
  let ans = [];
  dp[1] = arr[0];
  for (let i = 2; i <= N; i++) dp[i] = dp[i - 1] + arr[i - 1];
  for (let [i, j] of ranges) ans.push(dp[j] - dp[i - 1]);
  console.log(ans.join("\n"));
};

sum();
