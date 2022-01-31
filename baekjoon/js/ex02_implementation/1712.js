const sonik = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(
    input[1] >= input[2]
      ? "-1"
      : Math.floor(input[0] / (input[2] - input[1])) + 1
  );
};

sonik();
