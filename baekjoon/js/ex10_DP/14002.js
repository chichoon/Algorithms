const long = () => {
  const [[n], arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let dp = Array.from({ length: n }, (_) => []);
  dp[0].push(arr[0]);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < i; j++) {
      if (dp[j].length >= dp[i].length && arr[i] > arr[j])
        dp[i] = [...dp[j], arr[i]];
      else if (!dp[i].length) dp[i] = [arr[i]];
    }
  let max = [];
  dp.forEach((v) => {
    if (v.length > max.length) max = v;
  });
  console.log(`${max.length}\n${max.join(" ")}`);
};

long();
