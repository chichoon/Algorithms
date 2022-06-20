const sincho = () => {
  let [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(Math.abs(a - b));
};

sincho();
