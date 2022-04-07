const float = () => {
  let [a, b, n] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  a %= b;
  for (let i = 0; i + 1 < n; i++) a = (a * 10) % b;
  console.log(parseInt((a * 10) / b));
};

float();
