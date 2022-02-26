const home = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let min, max;
  input[0] > input[1]
    ? ((min = input[1]), (max = input[0]))
    : ((min = input[0]), (max = input[1]));
  let time = 0;
  if (input[2] * 2 > input[3]) {
    if (input[2] >= input[3]) {
      if ((min + max) % 2) time = (max - 1) * input[3] + 1 * input[2];
      else time = max * input[3];
    } else time = min * input[3] + (max - min) * input[2];
  } else time = (min + max) * input[2];
  console.log(time);
};

home();
