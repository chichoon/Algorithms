const rgb = () => {
  const [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let dp = Array.from({ length: n }, (v) => [0, 0, 0]);
  dp[0] = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
  }
  console.log(Math.min(...dp[n - 1]));
};

rgb();
