const recurMul = (a, b, m) => {
  if (b === BigInt(0)) return BigInt(1);
  if (b % BigInt(2) === BigInt(1))
    return (a * recurMul(a, b - BigInt(1), m)) % m;
  let val = recurMul(a, BigInt(b / BigInt(2)), m) % m;
  return (val * val) % m;
};

const mul = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);
  console.log(String(recurMul(input[0], input[1], input[2])));
};

mul();
