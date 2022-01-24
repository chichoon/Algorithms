const getGCD = (main, div) => {
  if (div === 0) return main;
  else return getGCD(div, main % div);
};

const gcdlcm = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((n) => {
      return parseInt(n);
    });

  let main, divider;
  input[0] > input[1]
    ? ((main = input[0]), (divider = input[1]))
    : ((main = input[1]), (divider = input[0]));

  let gcd = getGCD(main, divider);
  console.log(`${gcd}\n${(input[0] * input[1]) / gcd}`);
};

gcdlcm();
