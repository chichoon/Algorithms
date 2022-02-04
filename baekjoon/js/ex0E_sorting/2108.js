const tonggye = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const n = input[0];
  input.shift();
  const mid = input.sort((a, b) => a - b)[Math.floor(n / 2)];
  const range = input[n - 1] - input[0];
  let obj = {};
  let sum = 0;
  for (let i of input) {
    if (obj[i]) obj[i]++;
    else obj[i] = 1;
    sum += i;
  }
  let arr = [];
  for (let name in obj) {
    arr.push([name, obj[name]]);
  }
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));
  console.log(
    `${Math.round(sum / n)}\n${mid}\n${
      arr.length > 1
        ? arr[0][1] === arr[1][1]
          ? arr[1][0]
          : arr[0][0]
        : arr[0][0]
    }\n${range}`
  );
};

tonggye();
