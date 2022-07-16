const bottle = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let ans = 0;
  input.forEach((v) => (ans += v * 5));
  console.log(ans);
};

bottle();
