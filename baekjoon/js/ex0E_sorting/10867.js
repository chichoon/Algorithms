const sort = () => {
  let [n, arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  console.log([...new Set(arr)].sort((a, b) => a - b).join(" "));
};

sort();
