const biggestSeq = () => {
  let [[n], arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let dp = Array.from({ length: n }, (v, i) => arr[i]);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < i; j++)
      if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + arr[i]);
  console.log(Math.max(...dp));
};

biggestSeq();
