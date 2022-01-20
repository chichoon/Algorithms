const oKeun = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const len = parseInt(input[0]);
  const arr = input[1].split(" ").map((n) => {
    return parseInt(n);
  });
  let stack = [];
  let arrReturn = [];

  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) stack.pop();
    if (stack.length === 0) arrReturn.push(-1);
    else arrReturn.push(stack[stack.length - 1]);
    stack.push(arr[i]);
  }
  console.log(arrReturn.reverse().join(" "));
};

oKeun();
