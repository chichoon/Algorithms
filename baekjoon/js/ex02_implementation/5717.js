const sanggeun = () => {
  const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let ans = [];

  for (let i = 0; i < arr.length - 1; i++) ans.push(arr[i][0] + arr[i][1]);

  console.log(ans.join("\n"));
};

sanggeun();
