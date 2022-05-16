const fibo = () => {
  let [m, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  let max = [...arr].sort((a, b) => a - b)[m - 1];
  let dp = Array.from({ length: max + 1 }, (v) => [0, 0]);
  let ans = [];
  (dp[0] = [1, 0]), (dp[1] = [0, 1]);
  for (let i = 2; i <= max; i++)
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  for (let i = 0; i < m; i++) ans.push(dp[arr[i]].join(" "));

  console.log(ans.join("\n"));
};

fibo();
