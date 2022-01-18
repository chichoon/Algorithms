const josephus = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
  const k = parseInt(input[1]);
  const n = parseInt(input[0]);
  let arr = Array.from({ length: n }, (val, idx) => idx + 1);
  let str = "<";

  while (arr.length > 0) {
    for (let i = 0; i < k; i++) arr.push(arr.shift());
    if (arr.length > 1) str += `${arr.pop()}, `;
    else str += arr.pop();
  }
  console.log(str + ">");
};

josephus();
