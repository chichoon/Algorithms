const math = () => {
  let [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log((a + b) * (a - b));
};

math();
