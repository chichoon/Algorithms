const plane = () => {
  let [n1, k1, n2, k2] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(n1 * k1 + n2 * k2);
};

plane();
