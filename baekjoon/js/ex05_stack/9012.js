const vps = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  let ans = [];
  for (let str of input) {
    let stack = [];
    for (let c of str) {
      if (stack.length > 0 && c === ")" && stack[stack.length - 1] === "(")
        stack.pop();
      else if (c === "(" || c === ")") stack.push(c);
    }
    if (stack.length) ans.push("NO");
    else ans.push("YES");
  }
  console.log(ans.join("\n"));
};

vps();
