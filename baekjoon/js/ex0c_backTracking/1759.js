let l, c;
let arr;
let ans = [];
let input;

const vowel = ["a", "e", "i", "o", "u"];
const cons = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const recurCypher = (k, n) => {
  if (k === l) ans.push(arr.join(""));
  else if (n > c + 1) return;
  else {
    for (let i = n; i < c; i++) {
      arr[k] = input[i];
      recurCypher(k + 1, i + 1);
    }
  }
};

const ifIncluded = (str) => {
  let vow = false;
  let con = 0;
  for (let s of vowel) if (str.includes(s)) vow = true;
  for (let s of cons) if (str.includes(s)) con++;
  if (vow && con > 1) return true;
  else return false;
};

const cypher = () => {
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));
  [l, c] = input[0].map(Number);
  input = input[1].sort();
  let realAns = [];
  arr = Array.from({ length: l }, (v) => 0);
  recurCypher(0, 0);
  for (let v of ans) if (ifIncluded(v)) realAns.push(v);
  console.log(realAns.join("\n"));
};

cypher();
