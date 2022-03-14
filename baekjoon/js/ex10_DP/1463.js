const makeOne = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let dp = Array.from({ length: 1000001 }, (n) => 0);

  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = dp[i] < dp[i / 2] + 1 ? dp[i] : dp[i / 2] + 1;
    if (i % 3 === 0) dp[i] = dp[i] < dp[i / 3] + 1 ? dp[i] : dp[i / 3] + 1;
  }
  console.log(dp[input]);
};

makeOne();
