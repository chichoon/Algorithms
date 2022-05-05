const treasure = () => {
  let [n, [...arr], [...ref]] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  ref = ref.sort((a, b) => b - a);
  arr = arr.sort((a, b) => a - b);
  let s = 0;
  for (let i in arr) s += ref[i] * arr[i];
  console.log(s);
};

treasure();
