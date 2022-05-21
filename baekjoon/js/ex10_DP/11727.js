const square = () => {
  let n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
  let dp = Array.from({ length: n }, (v) => 0);
  dp[0] = 1;
  if (n > 0) dp[1] = 3;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
  }
  console.log(dp[n - 1]);
};

square();
