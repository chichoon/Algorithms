const sort = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => {
      return parseInt(n);
    });
  input.shift();
  console.log(input.sort((a, b) => a - b).join("\n"));
};

sort();
