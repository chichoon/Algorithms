const turret = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  input.shift();
  let ans = [];
  for (let i of input) {
    const length = Math.sqrt(
      Math.pow(i[0] - i[3], 2) + Math.pow(i[1] - i[4], 2)
    );
    if (length === 0) ans.push(i[2] === i[5] ? -1 : 0);
    else if (length >= i[2] + i[5]) ans.push(length > i[2] + i[5] ? 0 : 1);
    else if (length < i[2] + i[5]) {
      const sub = Math.abs(i[2] - i[5]);
      ans.push(length > sub ? 2 : length === sub ? 1 : 0);
    }
  }
  console.log(ans.join("\n"));
};

turret();
