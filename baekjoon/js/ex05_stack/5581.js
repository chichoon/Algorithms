const narabe = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  input = input.map((n) => {
    return parseInt(n);
  });
  let stack = [];
  let idx = 1;
  let white = 0;

  for (i of input) {
    if (stack.length === 0) stack.push([i, 1]);
    else {
      if (idx % 2 === 0 && stack[stack.length - 1][0] !== i) {
        let tmp = stack.pop()[1];
        if (stack.length > 0) stack[stack.length - 1][1] += tmp;
        else stack.push([i, tmp]);
      }
      if (stack[stack.length - 1][0] === i) stack[stack.length - 1][1]++;
      else stack.push([i, 1]);
    }
    idx++;
  }
  stack.forEach((n) => {
    if (n[0] === 0) white += n[1];
  });
  console.log(white);
};

narabe();
