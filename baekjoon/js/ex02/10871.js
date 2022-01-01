const smallNum = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  const arr = input[1].split(" ");
  const x = input[0].split(" ")[1];
  let ret = [];

  arr.forEach((n) => {
    if (Number(n) < Number(x)) {
      ret.push(n);
      ret.push(" ");
    }
  });
  ret.pop();
  console.log(ret.join(""));
};

smallNum();
