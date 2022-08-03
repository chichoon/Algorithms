const terces = () => {
  let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const ans = [];
  for (let str of arr) {
    if (str === "END") break;
    ans.push(str.split("").reverse().join(""));
  }
  console.log(ans.join("\n"));
};

terces();
