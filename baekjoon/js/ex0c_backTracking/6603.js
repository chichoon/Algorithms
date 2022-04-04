let k;
let s;
let arr;
let ans = [];
let ansOne = [];
let input;

const recurLottery = (l, m) => {
  if (l === 6) ansOne.push(arr.join(" "));
  else if (m > k + 1) return;
  else {
    for (let i = m; i < k; i++) {
      arr[l] = s[i];
      recurLottery(l + 1, i + 1);
    }
  }
};

const lottery = () => {
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  const len = input.length;
  for (let i = 0; i + 1 < len; i++) {
    k = input[i][0];
    s = input[i].slice(1);
    arr = Array.from({ length: 6 }, (v) => 0);
    recurLottery(0, 0);
    ans.push(ansOne.join("\n"));
    ansOne = [];
  }
  console.log(ans.join("\n\n"));
};

lottery();
