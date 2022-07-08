const findNum = () => {
  let [[n], arr, [m], toFind] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));
  (n = Number(n)), (m = Number(m));
  let obj = {};
  let ans = [];
  for (let i = 0; i < n; i++) obj[arr[i]] = true;
  for (let i = 0; i < m; i++) ans.push(obj[toFind[i]] ? 1 : 0);
  console.log(ans.join("\n"));
};

findNum();
