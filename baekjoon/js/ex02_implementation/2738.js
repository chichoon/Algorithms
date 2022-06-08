const matrix = () => {
  let [[n, m], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let ans = Array.from({ length: n }, (_) =>
    Array.from({ length: m }, (_) => 0)
  );
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) ans[i][j] = arr[i][j] + arr[n + i][j];
  console.log(ans.map((v) => v.join(" ")).join("\n"));
};

matrix();
