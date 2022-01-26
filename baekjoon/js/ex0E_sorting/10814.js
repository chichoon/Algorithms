const age = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const n = parseInt(input[0]);
  input.shift();
  input = input.map((n) => {
    let tmp = n.split(" ");
    return [parseInt(tmp[0]), tmp[1]];
  });
  input.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i++) console.log(input[i].join(" "));
};

age();
