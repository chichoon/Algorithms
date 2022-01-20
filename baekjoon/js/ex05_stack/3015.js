const oasis = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const len = parseInt(input[0]);
  input.shift();
  input = input.map((n) => {
    return parseInt(n);
  });
  let stack = [];
  let ans = 0;

  for (let i of input) {
    while (stack.length > 0 && stack[stack.length - 1][0] < i) {
      ans += stack[stack.length - 1][1];
      stack.pop();
    }
    if (stack.length < 1) stack.push([i, 1]);
    else if (stack[stack.length - 1][0] === i) {
      ans += stack[stack.length - 1][1];
      if (stack.length - 2 >= 0) ans++;
      stack[stack.length - 1][1]++;
    } else if (stack[stack.length - 1][0] > i) {
      ans += 1;
      stack.push([i, 1]);
    }
  }
  console.log(ans);
};

// 오아시스 노래들으면서 푸는데 슬슬 오아시스 노래가 화나려고하는군요
// 그와중에 오아시스 재결합 하면 좋겠다.. 그럴리없겠지만..

oasis();
