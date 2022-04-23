const duck = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let m = input[0][1] + input[1][0];
  let h = input[0][0];
  if (m >= 60) {
    h += Math.floor(m / 60);
    m %= 60;
  }
  if (h >= 24) h %= 24;
  console.log(`${h} ${m}`);
};

duck();
