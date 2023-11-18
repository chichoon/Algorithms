const sum = () => {
  const [[n, m], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const array = arr.slice(0, n);
  const question = arr.slice(n + 1);
  const ans = [];

  for (let [i, j, x, y] of question) {
    let s = 0;

    for (let k = i; k <= x; k++) {
      for (let l = j; l <= y; l++) {
        s += array[k - 1][l - 1];
      }
    }
    ans.push(s);
  }
  console.log(ans.join("\n"));
};

sum();
