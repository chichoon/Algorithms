const realGCD = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  let max = -1;
  let min = 1000001;
  for (let i of input[1]) {
    if (i > max) max = i;
    if (i < min) min = i;
  }
  console.log(max * min);
};

realGCD();
