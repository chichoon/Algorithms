const multiple = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(
    input[0] * (input[1] % 10) +
      "\n" +
      input[0] * parseInt((input[1] % 100) / 10) +
      "\n" +
      input[0] * parseInt(input[1] / 100) +
      "\n" +
      input[0] * input[1]
  );
};

multiple();
