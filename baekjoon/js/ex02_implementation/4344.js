const avg = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  let ans = [];
  for (let arr of input) {
    let avg = 0;
    let over = 0;
    for (let i = 1; i <= arr[0]; i++) avg += arr[i];
    avg /= arr[0];
    for (let i = 1; i <= arr[0]; i++) {
      if (arr[i] > avg) over++;
    }
    ans.push(((over / arr[0]) * 100).toFixed(3) + "%");
  }
  console.log(ans.join("\n"));
};

avg();
