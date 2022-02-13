const divider = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let i = 0;
  while (++i <= input[0]) {
    if (!(input[0] % i)) input[1]--;
    if (!input[1]) break;
  }
  if (input[1]) console.log(0);
  else console.log(i);
};

divider();
