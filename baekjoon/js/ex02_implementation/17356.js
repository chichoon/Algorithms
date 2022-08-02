const wookje = () => {
  let [w, j] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(1 / (1 + Math.pow(10, (j - w) / 400)));
};

wookje();
