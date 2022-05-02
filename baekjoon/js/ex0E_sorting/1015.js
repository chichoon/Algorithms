const seq = () => {
  let [[n], [...arr]] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let arrTmp = [...arr.map((v, i) => [v, i])]
    .sort((a, b) => a[0] - b[0])
    .map((v, i) => [v[1], i])
    .sort((a, b) => a[0] - b[0])
    .map((v) => v[1]);
  console.log(arrTmp.join(" "));
};

seq();
