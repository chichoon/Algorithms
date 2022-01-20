const tower = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let arr = input[1].split(" ").map((n) => {
    return parseInt(n);
  });
  let idx = 1;
  let stack = [];
  let ans = [];

  for (let i of arr) {
    while (stack.length > 0 && stack[stack.length - 1][0] < i) stack.pop();
    if (stack.length === 0) ans.push(0);
    else ans.push(stack[stack.length - 1][1]);
    stack.push([i, idx]);
    idx++;
  }
  console.log(ans.join(" "));
};

tower();
