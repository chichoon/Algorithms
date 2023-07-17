const add = () => {
  const [[n], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  for (let val of arr) {
    console.log(val[0] + val[1]);
  }
};

add();
