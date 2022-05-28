const padovan = () => {
  let [t, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const max = Math.max(...input);
  let arr = [];
  if (max < 6) {
    for (let i of input) {
      if (i < 4) arr.push(1);
      else if (i < 6) arr.push(2);
    }
    console.log(arr.join("\n"));
    return;
  }
  let dp = Array.from({ length: max + 1 }, (v) => 0);
  (dp[1] = 1), (dp[2] = 1), (dp[3] = 1), (dp[4] = 2), (dp[5] = 2);
  for (let i = 6; i <= max; i++) {
    dp[i] = dp[i - 5] + dp[i - 1];
  }
  for (let i of input) arr.push(dp[i]);
  console.log(arr.join("\n"));
};

padovan();
