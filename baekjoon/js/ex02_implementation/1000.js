const aPlusB = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  const arr = input[0].split(" ");

  console.log(`${Number(arr[0]) + Number(arr[1])}`);
};

aPlusB();
