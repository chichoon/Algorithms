const hanafuda = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => {
      return n.split(" ").map((m) => {
        return parseInt(m);
      });
    });
  let ans = [];
  let i = 0;
  while (true) {
    if (input[i][0] === 0) break;
    let arr = Array.from({ length: input[i][0] }, (val, idx) => idx + 1);
    let c = input[i++][1];
    for (let j = 0; j < c; j++) {
      let stackA = [];
      let stackB = [];
      while (input[i + j][0]-- > 1) stackA.push(arr.pop());
      while (input[i + j][1]-- > 0) stackB.push(arr.pop());
      while (stackA.length > 0) arr.push(stackA.pop());
      while (stackB.length > 0) arr.push(stackB.pop());
    }
    ans.push(arr.pop());
    i += c;
  }
  console.log(ans.join("\n"));
};

hanafuda();
