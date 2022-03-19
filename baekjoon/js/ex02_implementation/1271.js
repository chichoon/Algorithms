const rich = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);
  console.log(`${input[0] / input[1]}\n${input[0] % input[1]}`);
};

rich();
