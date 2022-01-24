const sort = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  input.sort((a, b) => {
    if (a.length === b.length) return a > b ? 1 : a < b ? -1 : 0;
    else return a.length - b.length;
  });
  console.log([...new Set(input)].join("\n"));
};

sort();
