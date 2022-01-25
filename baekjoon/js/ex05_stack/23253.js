const dataStructureIsGreat = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  for (let i of input) {
    let arr = i.split(" ").map((n) => {
      return parseInt(n);
    });
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        console.log("No");
        return;
      }
    }
  }
  console.log("Yes");
  return;
};

dataStructureIsGreat();
