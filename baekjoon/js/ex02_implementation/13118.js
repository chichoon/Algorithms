const apple = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  const index = input[0].indexOf(input[1][0]);
  if (index >= 0) console.log(index + 1);
  else console.log(0);
};

apple();
