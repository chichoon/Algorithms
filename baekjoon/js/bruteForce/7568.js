const mass = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const n = parseInt(input[0]);
  input.shift();
  input = input.map((n) => {
    return n.split(" ").map((m) => {
      return parseInt(m);
    });
  });
  let ans = Array.from({ length: n }, (val) => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) ans[i]++;
    }
  }
  console.log(ans.join(" "));
};

mass();
