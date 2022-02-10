const bridge = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  let ans = [];
  for (let i of input) {
    let divider = i[0] > i[1] - i[0] ? i[1] - i[0] : i[0];
    let bridge = 1;
    for (let j = 0; j < divider; j++) {
      bridge *= i[1] - j;
    }
    while (divider > 0) bridge /= divider--;
    ans.push(bridge);
  }
  console.log(ans.join("\n"));
};

bridge();
