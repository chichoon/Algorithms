const zero = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  let arr = [];

  for (let i of input) {
    if (i === "0") arr.pop();
    else arr.push(parseInt(i));
  }
  console.log(
    arr.reduce((acc, n) => {
      return acc + n;
    }, 0)
  );
};

zero();
