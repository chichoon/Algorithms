const oddNum = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  let min = 2147483647;
  let sum = 0;

  const arr = input.map((n) => {
    return Number(n);
  });

  arr.forEach((n) => {
    if (n % 2 === 1) {
      sum += n;
      if (n < min) min = n;
    }
  });
  if (sum === 0) console.log("-1");
  else console.log(`${sum}\n${min}`);
};

oddNum();
