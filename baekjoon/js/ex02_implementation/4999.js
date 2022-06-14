const justin = () => {
  let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  console.log(arr[0].length >= arr[1].length ? "go" : "no");
};

justin();
