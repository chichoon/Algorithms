const triangle = () => {
  let [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  arr.sort((a, b) => b - a);
  for (let i = 0; i < n - 2; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      console.log(arr[i] + arr[i + 1] + arr[i + 2]);
      return;
    }
  }
  console.log(-1);
};

triangle();
