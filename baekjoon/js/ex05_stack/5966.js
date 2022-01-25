const cow = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  input = input.map((n) => {
    return n.split(" ")[1];
  });
  let ans = [];
  for (let str of input) {
    let stack = [];
    for (let c of str) {
      if (stack.length > 0 && c === "<" && stack[stack.length - 1] === ">")
        stack.pop();
      else if (c === "<" || c === ">") stack.push(c);
    }
    if (stack.length) ans.push("illegal");
    else ans.push("legal");
  }
  console.log(ans.join("\n"));
};

cow();
