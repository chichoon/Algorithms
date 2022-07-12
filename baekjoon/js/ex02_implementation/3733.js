const shares = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let arr = [];
  for (let v of input) arr.push(Math.floor(v[1] / (v[0] + 1)));
  console.log(arr.join("\n"));
};

shares();
