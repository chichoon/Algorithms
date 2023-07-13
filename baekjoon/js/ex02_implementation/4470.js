const lineNo = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  for (let i in input) console.log(`${Number(i) + 1}. ${input[i]}`);
};

lineNo();
