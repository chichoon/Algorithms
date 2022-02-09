const getGCD = (main, div) => {
  if (div === 0) return main;
  else return getGCD(div, main % div);
};

const getLCM = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  let ans = [];
  for (let j of input) {
    let main, divider;
    j[0] > j[1]
      ? ((main = j[0]), (divider = j[1]))
      : ((main = j[1]), (divider = j[0]));
    ans.push((j[0] * j[1]) / getGCD(main, divider));
  }
  console.log(ans.join("\n"));
};

getLCM();
