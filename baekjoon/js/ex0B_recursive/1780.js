const recurPaper = (input, n, x, y, stack) => {
  const cur = input[y][x];
  if (n === 1) {
    stack[cur + 1]++;
    return;
  }
  let cnt = 0;
  for (let i = y; i < y + n; i++)
    for (let j = x; j < x + n; j++) if (input[i][j] === cur) cnt++;
  if (cnt === n * n) stack[cur + 1]++;
  else {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        recurPaper(input, n / 3, x + (j * n) / 3, y + (i * n) / 3, stack);
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
  let stack = [0, 0, 0];
  input.shift();
  recurPaper(input, n, 0, 0, stack);
  console.log(stack.join("\n"));
};

paper();
