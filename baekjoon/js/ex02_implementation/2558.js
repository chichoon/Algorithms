const ab = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(input[0] + input[1]);
};

ab();
