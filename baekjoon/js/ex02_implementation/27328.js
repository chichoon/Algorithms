const threeway = () => {
  const [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  if (a === b) console.log(0);
  else if (a < b) console.log(-1);
  else console.log(1);
};

threeway();
