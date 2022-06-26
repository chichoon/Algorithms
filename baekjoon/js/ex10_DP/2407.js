const comb = () => {
  const [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const dp = Array.from({ length: n + 1 }, (v) => BigInt(0));
  dp[1] = BigInt(1);
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] * BigInt(i);
  console.log(String(dp[n] / dp[n - m] / dp[m]));
};

comb();
