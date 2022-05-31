const afc = () => {
  let [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  if (a - b < 0 || (a - b) % 2) console.log(-1);
  else console.log(`${(a + b) / 2} ${(a - b) / 2}`);
};

afc();
