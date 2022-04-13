const simburum = () => {
  let s = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .reduce((p, c) => p + c, 0);
  console.log(`${parseInt(s / 60)}\n${s % 60}`);
};

simburum();
