const fibo = () => {
  let i = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  if (i === 0) console.log("0\n0");
  else {
    let n = i < 0 ? -i : i;
    let dp = Array.from({ length: n + 1 }, (_) => 0);
    dp[1] = 1;
    if (i < 0)
      for (let j = 2; j <= n; j++) dp[j] = (dp[j - 2] - dp[j - 1]) % 1000000000;
    else
      for (let j = 2; j <= n; j++) dp[j] = (dp[j - 2] + dp[j - 1]) % 1000000000;
    console.log(`${dp[n] < 0 ? -1 : dp[n] === 0 ? 0 : 1}\n${Math.abs(dp[n])}`);
  }
};

fibo();
