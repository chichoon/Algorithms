const atm = () => {
  let [[n], [...arr]] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i of arr) {
    sum += i * n--;
  }
  console.log(sum);
};

atm();
