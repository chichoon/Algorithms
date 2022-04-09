let s;
let ans = [];

const operation = (str, x) => {
  switch (str) {
    case "add":
      s[Number(x)] = true;
      break;
    case "remove":
      s[Number(x)] = false;
      break;
    case "check":
      ans.push(s[Number(x)] ? 1 : 0);
      break;
    case "toggle":
      s[Number(x)] ? (s[Number(x)] = false) : (s[Number(x)] = true);
      break;
    case "all":
      s = Array.from({ length: 21 }, (v) => true);
      break;
    case "empty":
      s = Array.from({ length: 21 }, (v) => false);
      break;
  }
};

const arr = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));
  s = Array.from({ length: 21 }, (v) => false);
  const m = input[0][0];
  for (let i = 1; i <= m; i++) operation(input[i][0], input[i][1], s, ans);
  console.log(ans.join("\n"));
};

arr();
