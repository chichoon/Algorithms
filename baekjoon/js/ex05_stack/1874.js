const seq = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const len = parseInt(input[0]);
  input.shift();
  input = input.map((n) => {
    return parseInt(n);
  });
  let arr = [];
  let stack = [];
  let str = [];

  for (let i = len; i >= 1; i--) {
    arr.push(i);
  }
  for (let i of input) {
    while (arr[arr.length - 1] <= i) {
      stack.push(arr.pop());
      str.push("+");
    }
    if (stack[stack.length - 1] != i) {
      console.log("NO");
      return;
    }
    stack.pop();
    str.push("-");
  }
  console.log(str.join("\n"));
};

seq();
