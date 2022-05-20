const homework = () => {
  let [l, a, b, c, d] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const math = Math.floor(b / d) + (b % d ? 1 : 0);
  const korean = Math.floor(a / c) + (a % c ? 1 : 0);
  console.log(math > korean ? l - math : l - korean);
};

homework();
