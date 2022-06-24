const gene = () => {
  let [k, l, h] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  console.log(h[0] * h[1] * h[2] * (k[0] * k[1] + l[0] * l[1]));
};

gene();
