const reverse = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  let idx = 1;
  for (let i of input) {
    let tmp = i.split(" ").reverse();
    console.log(`Case #${idx}: ${tmp.join(" ")}`);
    idx++;
  }
};

reverse();
