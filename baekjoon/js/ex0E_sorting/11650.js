const point = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  input = input.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  console.log(input.join("\n").replace(/\,/g, " "));
};

point();
