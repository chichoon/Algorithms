const pic = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const m = input[0][1];
  let arr = Array(100);
  let ans = 0;
  for (let i = 0; i < 100; i++) arr[i] = Array.from({ length: 100 }, (n) => 0);
  for (let n of input) {
    for (let i = n[0] - 1; i < n[2]; i++)
      for (let j = n[1] - 1; j < n[3]; j++) arr[i][j]++;
  }
  for (let i = 0; i < 100; i++)
    for (let j = 0; j < 100; j++) if (arr[i][j] > m) ans++;
  console.log(ans);
};

pic();
