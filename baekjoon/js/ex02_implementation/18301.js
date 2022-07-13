const rats = () => {
  let n = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(Math.floor(Math.abs(((n[0] + 1) * (n[1] + 1)) / (n[2] + 1) - 1)));
};

rats();
