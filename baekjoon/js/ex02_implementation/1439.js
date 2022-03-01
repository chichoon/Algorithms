const rev = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().trim();
  let zeroToOne = 0;
  let oneToZero = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[j] !== input[j + 1] && input[j] === "0") zeroToOne++;
    else if (input[j] !== input[j + 1] && input[j] === "1") oneToZero++;
  }
  console.log(zeroToOne > oneToZero ? oneToZero : zeroToOne);
};

rev();
