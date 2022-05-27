const duck = () => {
  let [[h, m, s], [cookSec]] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  const sec = s + cookSec;
  const min = m + Math.floor(sec / 60);
  const hour = h + Math.floor(min / 60);
  console.log(`${hour % 24} ${min % 60} ${sec % 60}`);
};

duck();
