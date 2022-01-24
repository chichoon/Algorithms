const goodWord = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  let num = 0;

  for (let i of input) {
    let stack = [];
    for (let j of i) {
      if (stack.length > 0 && stack[stack.length - 1] === j) stack.pop();
      else stack.push(j);
    }
    if (!stack.length) num++;
  }
  console.log(num);
};

goodWord();
