const square = () => {
  const [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  console.log(a * b);
};

square();
