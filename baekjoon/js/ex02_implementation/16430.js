const jerry = () => {
  let [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(`${m - n} ${m}`);
};

jerry();
