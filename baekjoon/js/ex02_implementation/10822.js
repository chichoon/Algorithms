const sum = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(",")
    .map(Number);
  let sum = 0;
  input.forEach((n) => (sum += n));
  console.log(sum);
};

sum();
