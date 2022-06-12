const fibonacci = () => {
  const n = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let dp = Array.from({ length: n + 1 }, (v) => BigInt(0));
  dp[1] = BigInt(1);
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 2] + dp[i - 1];
  console.log(dp[n].toString());
};

fibonacci();
