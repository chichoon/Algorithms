const bracket = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().trim();
  let stack = [];
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "[") {
      if (input[i] === "(" && input[i + 1] === ")") {
        stack.push(2);
        i++;
      } else if (input[i] === "[" && input[i + 1] === "]") {
        stack.push(3);
        i++;
      } else stack.push(input[i]);
    } else if (input[i] === ")" || input[i] === "]") {
      while (stack.length && typeof stack[stack.length - 1] === "number")
        sum += stack.pop();
      if (
        !stack.length ||
        stack[stack.length - 1] !== (input[i] === ")" ? "(" : "[")
      )
        return console.log(0);
      stack.pop();
      stack.push(sum * (input[i] === ")" ? 2 : 3));
      sum = 0;
    }
  }
  let flag = true;
  stack.forEach((n) => {
    if (typeof n !== "number") flag = false;
    sum += n;
  });
  if (flag) console.log(sum);
  else console.log(0);
};

bracket();
