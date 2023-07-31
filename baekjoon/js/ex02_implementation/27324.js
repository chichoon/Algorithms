const sameNumber = () => {
  const [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("")
    .map(Number);
  if (n === m) console.log(1);
  else console.log(0);
};

sameNumber();
