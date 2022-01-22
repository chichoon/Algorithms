const histogram = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  for (line of input) {
    if (line === "0") break;
    let arr = line.split(" ").map((n) => {
      return parseInt(n);
    });
    let n = arr[0];
    arr.shift();
    let stack = [];
    let ans = 0;
    for (let i = 0; i < n; i++) {
      let idx = i;
      while (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
        let tmp = stack.pop();
        if (ans < tmp[0] * (i - tmp[1])) ans = tmp[0] * (i - tmp[1]);
        idx = tmp[1];
      }
      stack.push([arr[i], idx]);
    }
    while (stack.length > 0) {
      let tmp = stack.pop();
      if (ans < tmp[0] * (n - tmp[1])) ans = tmp[0] * (n - tmp[1]);
    }
    console.log(ans);
  }
};

histogram();
