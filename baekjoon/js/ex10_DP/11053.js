const long = () => {
  const [[n], arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let dp = Array.from({ length: n }, (v) => 1);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < i; j++)
      if (dp[j] >= dp[i] && arr[i] > arr[j]) dp[i] = dp[j] + 1;
  console.log(Math.max(...dp));
};

long();
