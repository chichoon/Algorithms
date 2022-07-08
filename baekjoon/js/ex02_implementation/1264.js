const vowel = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let ans = [];
  for (let i of input) {
    if (i === "#") break;
    let sum = 0;
    for (let c of i) {
      if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") sum++;
      if (c === "A" || c === "E" || c === "I" || c === "O" || c === "U") sum++;
    }
    ans.push(sum);
  }
  console.log(ans.join("\n"));
};

vowel();
