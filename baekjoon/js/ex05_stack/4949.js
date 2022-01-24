const balance = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .join("")
    .split(".");
  let ans = [];
  for (let str of input) {
    if (str.length === 0) continue;
    let stack = [];
    for (let c of str) {
      if (
        stack.length > 0 &&
        ((c === ")" && stack[stack.length - 1] === "(") ||
          (c === "]" && stack[stack.length - 1] === "["))
      )
        stack.pop();
      else if (c === "(" || c === "[" || c === ")" || c === "]") stack.push(c);
    }
    if (stack.length) ans.push("no");
    else ans.push("yes");
  }
  console.log(ans.join("\n"));
};

balance();
