const avg = () => {
  const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const sum = arr.reduce((acc, cur) => (cur < 40 ? acc + 40 : acc + cur), 0);
  console.log(sum / arr.length);
};

avg();
