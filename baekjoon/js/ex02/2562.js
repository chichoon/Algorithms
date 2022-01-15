const max = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const arr = input.map((n) => {
    return parseInt(n);
  });
  const newArr = [...arr].sort((a, b) => {
    if (a < b) return 1;
    else if (a === b) return 0;
    else if (a > b) return -1;
  });
  console.log(`${newArr[0]}\n${arr.findIndex((n) => n === newArr[0]) + 1}`);
};

max();
