const cupcake = () => {
  let [r, s] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(r * 8 + s * 3 > 28 ? r * 8 + s * 3 - 28 : 0);
};

cupcake();
