const recurQuadTree = (input, x, y, n) => {
  const firstElem = input[y][x];
  let cnt = 0;
  let stack = [];
  if (n === 1) return firstElem;
  for (let i = y; i < y + n; i++)
    for (let j = x; j < x + n; j++) if (input[i][j] === firstElem) cnt++;
  if (cnt === n * n) return firstElem;
  stack.push(recurQuadTree(input, x, y, n / 2));
  stack.push(recurQuadTree(input, x + n / 2, y, n / 2));
  stack.push(recurQuadTree(input, x, y + n / 2, n / 2));
  stack.push(recurQuadTree(input, x + n / 2, y + n / 2, n / 2));
  return `(${stack.join("")})`;
};

const quadTree = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const n = parseInt(input[0]);
  input.shift();
  input = input.map((n) => n.split("").map(Number));
  console.log(recurQuadTree(input, 0, 0, n));
};

quadTree();
