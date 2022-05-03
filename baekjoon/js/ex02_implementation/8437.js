const julka = () => {
  let [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(BigInt);
  console.log(`${(n - m) / 2n + m}\n${(n - m) / 2n}`);
};

julka();
