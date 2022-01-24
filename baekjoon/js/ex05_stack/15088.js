const daenerys = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const len = parseInt(input[0].split(" ")[0]);
  let stack = [];
  input = input[1].split(" ");

  stack.push(0);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "undo") {
      let iter = parseInt(input[++i]);
      while (iter-- > 0) stack.pop();
    } else {
      let num = stack[stack.length - 1] + parseInt(input[i]);
      if (num < 0) while (num < 0) num += len;
      if (num >= len) while (num >= len) num -= len;
      stack.push(num);
    }
  }
  console.log(stack[stack.length - 1]);
};

daenerys();
