const triangle = () => {
  const [[n], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let dp = Array.from({ length: n }, (v, i) =>
    Array.from({ length: i + 1 }, (v) => 0)
  );
  dp[0][0] = arr[0][0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) dp[i][j] = dp[i - 1][j] + arr[i][j];
      else if (j === i) dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
      else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + arr[i][j];
    }
  }
  console.log(Math.max(...dp[n - 1]));
};

triangle();
