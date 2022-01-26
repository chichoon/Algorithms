const josephus = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let arr = Array.from({ length: input[0] }, (val, idx) => idx + 1);
  let str = "<";
  while (arr.length) {
    for (let i = 0; i < input[1]; i++) arr.push(arr.shift());
    if (arr.length > 1) str += `${arr.pop()}, `;
    else str += arr.pop();
  }
  console.log(str + ">");
};

josephus();
