const goodRange = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  let max = -1;
  for (let i of input[1]) if (i > max) max = i;
  let ans = 0;
  for (let i = 1; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      let cnt = 0;
      for (let k of input[1]) {
        if (k >= i && k <= j) break;
        if (input[2][0] >= i && input[2][0] <= j) cnt++;
      }
      if (cnt === input[0][0]) ans++;
    }
  }
  console.log(ans);
};

goodRange();
