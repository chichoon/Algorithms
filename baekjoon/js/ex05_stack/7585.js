const brackets = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let ans = [];
  for (let str of input) {
    if (str === "#") break;
    let stack = [];
    for (let c of str) {
      if (
        stack.length > 0 &&
        ((c === ")" && stack[stack.length - 1] === "(") ||
          (c === "}" && stack[stack.length - 1] === "{") ||
          (c === "]" && stack[stack.length - 1] === "["))
      )
        stack.pop();
      else if (
        c === "(" ||
        c === ")" ||
        c === "{" ||
        c === "}" ||
        c === "[" ||
        c === "]"
      )
        stack.push(c);
    }
    if (stack.length) ans.push("Illegal");
    else ans.push("Legal");
  }
  console.log(ans.join("\n"));
};

brackets();
