const easy = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let i = 1;
  let n = 1;
  let sum = 0;
  while (true) {
    for (let j = 0; j < n; j++) {
      if (i > input[1]) break;
      if (i >= input[0]) sum += n;
      i++;
    }
    if (i > input[1]) break;
    n++;
  }
  console.log(sum);
};

easy();
