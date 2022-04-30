const card = () => {
  let [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let obj = {};
  let sortArr = [];
  for (let v of arr) {
    if (obj[v]) obj[v]++;
    else obj[v] = 1;
  }
  for (let v in obj) sortArr.push([v, obj[v]]);
  sortArr = sortArr
    .sort((a, b) => b[1] - a[1])
    .filter((v) => v[1] === sortArr[0][1])
    .map((v) => BigInt(v[0]))
    .sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
  console.log(String(sortArr[0]));
};

card();
