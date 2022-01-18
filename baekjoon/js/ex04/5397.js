const password = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let i = 1;
  const len = input.length;
  while (i < len) {
    let stackLeft = [];
    let stackRight = [];
    for (let j of input[i]) {
      switch (j) {
        case "<":
          if (stackLeft.length !== 0) stackRight.push(stackLeft.pop());
          break;
        case ">":
          if (stackRight.length !== 0) stackLeft.push(stackRight.pop());
          break;
        case "-":
          if (stackLeft.length !== 0) stackLeft.pop();
          break;
        default:
          stackLeft.push(j);
          break;
      }
    }
    console.log(stackLeft.join("") + stackRight.reverse().join(""));
    i++;
  }
};

password();
