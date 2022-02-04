const coordPress = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const arr = [...new Set(input[1])].sort((a, b) => a - b);
  let obj = {};
  let ans = [];
  arr.forEach((val, idx) => (obj[val] = idx));
  for (let i of input[1]) {
    ans.push(obj[i]);
  }
  console.log(ans.join(" "));
};

coordPress();
