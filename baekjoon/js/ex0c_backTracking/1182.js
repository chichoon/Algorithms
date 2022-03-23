let ans = 0;
let n;
let s;

const recurSeq = (input, k, sum) => {
  if (k === n && sum === s) ans++;
  if (k === n) return;
  recurSeq(input, k + 1, sum + input[k]);
  recurSeq(input, k + 1, sum);
};

const seq = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  n = input[0][0];
  s = input[0][1];
  recurSeq(input[1], 0, 0);
  console.log(!s ? ans - 1 : ans);
};

seq();
