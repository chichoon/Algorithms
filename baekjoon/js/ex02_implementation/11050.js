const coef = () => {
  const fs = require("fs");
  let input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((n) => {
      return parseInt(n);
    });
  let divider = input[1] > input[0] - input[1] ? input[1] : input[0] - input[1];
  let ans = 1;
  for (let i = 0; i < divider; i++) {
    ans *= input[0] - i;
  }
  while (divider > 0) ans /= divider--;
  console.log(ans);
};

coef();
