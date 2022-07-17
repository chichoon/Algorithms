const multiply = () => {
  let [[a, b], [n], [m]] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(BigInt));
  console.log((n * m).toString());
};

multiply();
