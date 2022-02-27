const thirty = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
  let sum = 0;
  const len = input.length;
  if (input[0] !== 0) console.log("-1");
  else {
    for (let i = 0; i < len; i++) sum += input[i];
    if (sum % 3) console.log("-1");
    else console.log(input.reverse().join(""));
  }
};

thirty();
