const histogram = () => {
  const [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const ans = [];
  for (let v of arr) ans.push("=".repeat(v));
  console.log(ans.join("\n"));
};

histogram();
