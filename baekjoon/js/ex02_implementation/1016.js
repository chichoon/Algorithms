const noSquare = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const range = input[1] - input[0] + 1;
  const maxSqrt = Math.floor(Math.sqrt(input[1]));
  let notSquare = Array.from({ length: range }, (n) => 1);
  let sum = 0;
  for (let i = 2; i <= maxSqrt; i++) {
    let n = i * i;
    let idx = Math.ceil(input[0] / n) * n - input[0];
    while (idx + input[0] <= input[1]) {
      notSquare[idx] = 0;
      idx += n;
    }
  }
  for (let i = 0; i < range; i++) sum += notSquare[i];
  console.log(sum);
};

noSquare();
