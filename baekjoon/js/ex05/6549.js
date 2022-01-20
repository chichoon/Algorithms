const histogram = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let ans = [];

  for (line of input) {
    if (line === "0") break;
    let arr = line.split(" ").map((n) => {
      return parseInt(n);
    });
    let stack = [];
    for (i of arr) {
      while (stack.length > 0 && stack[stack.length - 1] > i) {}
      stack.push(i);
    }
  }
  console.log(ans.join("\n"));
};

histogram();
