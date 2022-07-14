const receipt = () => {
  const [[x], [n], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let sum = 0;
  for (let i = 0; i < n; i++) sum += arr[i][0] * arr[i][1];

  console.log(sum === x ? "Yes" : "No");
};

receipt();
