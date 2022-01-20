const { parse } = require("path/posix");

const arithmetic = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  const arr = input[0].split(" ");
  const a = Number(arr[0]);
  const b = Number(arr[1]);

  console.log(`${a + b}\n${a - b}\n${a * b}\n${parseInt(a / b)}\n${a % b}`);
};

arithmetic();
