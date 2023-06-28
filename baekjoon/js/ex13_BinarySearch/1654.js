const cutting = () => {
  let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let [_, n] = arr.shift().split(" ").map(Number);
  arr = arr.map(Number).sort((a, b) => a - b);
  let min = 0,
    max = arr[arr.length - 1],
    mid,
    ans = 0;
  while (min <= max) {
    let cnt = 0;
    mid = Math.floor((max + min) / 2);
    for (length of arr) cnt += Math.floor(length / mid);
    if (cnt >= n) {
      min = mid + 1;
      if (ans < mid) ans = mid;
    } else {
      max = mid - 1;
    }
  }
  console.log(ans);
};

cutting();
