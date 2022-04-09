const r2 = () => {
  let [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(b * 2 - a);
};

r2();
