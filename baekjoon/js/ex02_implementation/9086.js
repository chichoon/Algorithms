const str = () => {
  let i = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  i.shift();
  let arr = [];
  for (let a of i) arr.push(`${a[0]}${a[a.length - 1]}`);
  console.log(arr.join("\n"));
};

str();
