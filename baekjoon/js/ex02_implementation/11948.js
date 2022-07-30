const joi = () => {
  let [a, b, c, d, e, f] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(
    [a, b, c, d]
      .sort((a, b) => b - a)
      .reduce((acc, cur, idx) => (idx !== 3 ? acc + cur : acc), 0) +
      Math.max(e, f)
  );
};

joi();
