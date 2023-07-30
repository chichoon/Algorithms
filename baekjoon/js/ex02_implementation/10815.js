const card = () => {
  let [n, arr1, m, arr2] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  n = Number(n);
  m = Number(m);
  arr1 = arr1.split(" ").map(Number);
  arr2 = arr2.split(" ").map(Number);
  const obj = {};
  const ans = [];

  for (let v of arr1) obj[v] = true;
  for (let v of arr2) {
    if (obj[v]) ans.push(1);
    else ans.push(0);
  }

  console.log(ans.join(" "));
};

card();
