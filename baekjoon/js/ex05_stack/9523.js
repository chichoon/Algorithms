const morse = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[1];
  let stack = [];
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "=") num += 10;
    else if (input[i] === "-") num += 5;
    else if (input[i] === ":") num += 2;
    else if (input[i] === ".") num += 1;
    else if (input[i] === "*") {
      let tmp = 0;
      i += 2;
      if (num) stack.push(num);
      while (input[i] != " " && i < input.length) {
        if (input[i] === "=") tmp += 10;
        else if (input[i] === "-") tmp += 5;
        else if (input[i] === ":") tmp += 2;
        else if (input[i] === ".") tmp += 1;
        i++;
      }
      stack.push(tmp * stack.pop());
      num = 0;
    } else if (input[i] === "+") {
      stack.push(num);
      num = 0;
    }
    if (i === input.length - 1) stack.push(num);
  }
  num = 0;
  while (stack.length > 0) num += stack.pop();
  console.log(num);
};

morse();
