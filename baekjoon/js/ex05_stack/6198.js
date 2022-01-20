const roofPark = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const len = parseInt(input[0]);
  let stack = [];
  let sum = 0;
  input.shift();
  input.reverse();
  input = input.map((n) => {
    return parseInt(n);
  });
  console.log(input);

  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= input[i]) {
      stack.pop();
    }
    sum += stack.length;
    stack.push(input[i]);
  }
  console.log(sum);
};

roofPark();
