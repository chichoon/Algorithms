const skill = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  console.log(Math.abs(input[3] + input[0] - (input[2] + input[1])));
};

skill();
