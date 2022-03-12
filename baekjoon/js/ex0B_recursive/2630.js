const recurPaper = (input, n, x, y, stack) => {
  const cur = input[y][x];
  if (n === 1) stack[cur]++;
  else {
    let cnt = 0;
    for (let i = y; i < y + n; i++)
      for (let j = x; j < x + n; j++) if (input[i][j] === cur) cnt++;
    if (cnt === n * n) stack[cur]++;
    else {
      for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++)
          recurPaper(input, n / 2, x + (j * n) / 2, y + (i * n) / 2, stack);
    }
  }
};

const paper = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const n = input[0][0];
  let stack = [0, 0];
  input.shift();
  recurPaper(input, n, 0, 0, stack);
  console.log(stack.join("\n"));
};

paper();
