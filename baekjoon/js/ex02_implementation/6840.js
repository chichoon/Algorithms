const middle = () => {
  const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(arr[1]);
};

middle();
