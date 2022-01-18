const editor = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let index = 2;
  const len = input.length;
  let stack1 = [];
  let stack2 = [];

  for (let i in input[0]) {
    stack1.push(input[0][i]);
  }

  while (index < len) {
    switch (input[index][0]) {
      case "L":
        if (stack1.length !== 0) {
          stack2.push(stack1.pop());
        }
        break;
      case "D":
        if (stack2.length !== 0) {
          stack1.push(stack2.pop());
        }
        break;
      case "B":
        if (stack1.length !== 0) {
          stack1.pop();
        }
        break;
      case "P":
        stack1.push(input[index][2]);
        break;
    }
    index++;
  }
  console.log([...stack1, ...stack2.reverse()].join(""));
};

editor();
