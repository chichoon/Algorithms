const site = () => {
  let [ur, tr, uo, to] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(56 * ur + 24 * tr + 14 * uo + 6 * to);
};

site();
