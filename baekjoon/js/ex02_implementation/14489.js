const chicken = () => {
  let [[a, b], [c]] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  if (a + b >= c * 2) console.log(a + b - c * 2);
  else console.log(a + b);
};

chicken();
