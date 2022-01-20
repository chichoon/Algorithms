const editor = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let index = 2;
  const len = input.length;
  let stackLeft = [];
  let stackRight = [];

  for (let i in input[0]) {
    stackLeft.push(input[0][i]);
  }

  while (index < len) {
    switch (input[index][0]) {
      case "L":
        if (stackLeft.length !== 0) {
          stackRight.push(stackLeft.pop());
        }
        break;
      case "D":
        if (stackRight.length !== 0) {
          stackLeft.push(stackRight.pop());
        }
        break;
      case "B":
        if (stackLeft.length !== 0) {
          stackLeft.pop();
        }
        break;
      case "P":
        stackLeft.push(input[index][2]);
        break;
    }
    index++;
  }
  console.log([...stackLeft, ...stackRight.reverse()].join(""));
};

editor();
