const card = () => {
  let [[n], arr, [m], ref] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let obj = {};
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }
  for (let i = 0; i < m; i++) {
    if (!obj[ref[i]]) ans.push(0);
    else ans.push(obj[ref[i]]);
  }
  console.log(ans.join(" "));
};

card();
