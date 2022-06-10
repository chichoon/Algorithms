const isBig = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let ans = [];
  for (let [i, j] of input) {
    if (i === 0 && j === 0) break;
    ans.push(i > j ? "Yes" : "No");
  }
  console.log(ans.join("\n"));
};

isBig();
