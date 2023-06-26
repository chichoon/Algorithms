const c = () => {
  const [s, i] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  console.log(s[Number(i) - 1]);
};

c();
