let arr, whole;
let min;
let n;
let input;

const calcSub = (arrNot) => {
  let sumS = 0;
  let sumL = 0;
  for (let i = 0; i < n / 2 - 1; i++) {
    for (let j = i + 1; j < n / 2; j++) {
      sumS += input[arr[i]][arr[j]] + input[arr[j]][arr[i]];
      sumL += input[arrNot[i]][arrNot[j]] + input[arrNot[j]][arrNot[i]];
    }
  }
  return Math.abs(sumS - sumL);
};

const recurStarlink = (k, l) => {
  if (k === n / 2) {
    let arrNot = whole.filter((v) => !arr.includes(v));
    let sub = calcSub(arrNot);
    if (sub < min) min = sub;
  } else {
    for (let i = l; i < n; i++) {
      arr[k] = i;
      recurStarlink(k + 1, i + 1);
    }
  }
};

const startlink = () => {
  [[n], ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  whole = Array.from({ length: n }, (v, i) => i);
  arr = Array.from({ length: n / 2 }, (v) => 0);
  min = 99999999;
  recurStarlink(0, 0);
  console.log(min);
};

startlink();
