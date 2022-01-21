const aun = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  let stack = [];

  for (let i of input) {
    if (i === "A") stack.push("A");
    else if (i === "Un") {
      if (stack.length === 0) {
        console.log("NO");
        return;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) console.log("NO");
  else console.log("YES");
};

aun();
