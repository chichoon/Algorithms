const football = () => {
  let [v, h] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  console.log(
    `${v[0] * 6 + v[1] * 3 + v[2] * 2 + v[3] * 1 + v[4] * 2} ${
      h[0] * 6 + h[1] * 3 + h[2] * 2 + h[3] * 1 + h[4] * 2
    }`
  );
};

football();
