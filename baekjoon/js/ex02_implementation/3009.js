const fourth = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const x =
    input[0][0] === input[1][0]
      ? input[2][0]
      : input[0][0] === input[2][0]
      ? input[1][0]
      : input[0][0];
  const y =
    input[0][1] === input[1][1]
      ? input[2][1]
      : input[0][1] === input[2][1]
      ? input[1][1]
      : input[0][1];
  console.log(`${x} ${y}`);
};

fourth();
