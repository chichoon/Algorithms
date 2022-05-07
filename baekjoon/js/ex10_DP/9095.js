const onetwothree = () => {
  let [n, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const max = Math.max(...input);
  let arr = Array.from({ length: max + 1 }, (v) => 0);
  let ans = [];
  (arr[1] = 1), (arr[2] = 2), (arr[3] = 4);
  for (let i = 4; i <= max; i++) arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  for (let i of input) ans.push(arr[i]);
  console.log(ans.join("\n"));
};

onetwothree();
