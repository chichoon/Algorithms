const wordDivide = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("");
  const len = input.length;
  let words = [];
  for (let i = 1; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      words.push(
        input.slice(0, i).reverse().join("") +
          input.slice(i, j).reverse().join("") +
          input.slice(j).reverse().join("")
      );
    }
  }
  console.log(words.sort()[0]);
};

wordDivide();
