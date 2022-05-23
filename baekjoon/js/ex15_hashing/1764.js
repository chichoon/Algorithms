const hear = () => {
  let [[n, m], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));
  n = Number(n);
  m = Number(m);
  let obj = {};
  let ans = [];
  for (let i = 0; i < n; i++) obj[arr[i]] = true;
  for (let i = n; i < n + m; i++) if (obj[arr[i]]) ans.push(arr[i]);
  console.log(ans.length);
  console.log(ans.sort().join("\n"));
};

hear();
