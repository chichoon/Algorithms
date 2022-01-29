const sum = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n, i) => {
      let j = n.split(" ").map(Number);
      return `Case #${i}: ${j[0]} + ${j[1]} = ${j[0] + j[1]}`;
    });
  input.shift();
  console.log(input.join("\n"));
};

sum();
