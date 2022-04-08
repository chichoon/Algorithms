let n;
let input;
let algebraNum; // + - * /
let algStack = [];
let min = 1000000000;
let max = -1000000000;
let ans = 0;

const doAlgebra = () => {
  let i = 1;
  let sum = input[0];
  for (let v of algStack) {
    if (v === "+") sum += input[i];
    else if (v === "-") sum -= input[i];
    else if (v === "*") sum *= input[i];
    else if (v === "/") {
      if (sum < 0) sum = Math.floor(-sum / input[i]) * -1;
      else sum = Math.floor(sum / input[i]);
    }
    i++;
  }
  ans++;
  if (sum < min) min = sum;
  if (sum > max) max = sum;
};

const getAlgebra = (algIdx) => {
  if (algIdx === 0) return "+";
  else if (algIdx === 1) return "-";
  else if (algIdx === 2) return "*";
  else if (algIdx === 3) return "/";
};

const recurAlgeb = (k, algIdx) => {
  if (k === n - 1) doAlgebra();
  else if (algebraNum[algIdx] === 0) return;
  else {
    algStack.push(getAlgebra(algIdx));
    algebraNum[algIdx]--;
    recurAlgeb(k + 1, 0);
    recurAlgeb(k + 1, 1);
    recurAlgeb(k + 1, 2);
    recurAlgeb(k + 1, 3);
    algebraNum[algIdx]++;
    algStack.pop();
  }
};

const algeb = () => {
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  n = input[0][0];
  algebraNum = input[2];
  input = input[1];
  recurAlgeb(0, 0);
  recurAlgeb(0, 1);
  recurAlgeb(0, 2);
  recurAlgeb(0, 3);
  console.log(`${max}\n${min}`);
};

algeb();
