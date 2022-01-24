const chess = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const width = parseInt(input[0].split(" ")[1]);
  const height = parseInt(input[0].split(" ")[0]);
  input.shift();

  let min = 1000000000;
  let sum;
  for (let i = 0; i < height - 7; i++) {
    for (let j = 0; j < width - 7; j++) {
      sum = 0;
      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l++) {
          if (k % 2 === 1) {
            if (input[k][l++] !== "W") sum++;
            if (input[k][l] !== "B") sum++;
          } else {
            if (input[k][l++] !== "B") sum++;
            if (input[k][l] !== "W") sum++;
          }
        }
      }
      if (sum < min) min = sum;
      sum = 0;
      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l++) {
          if (k % 2 === 1) {
            if (input[k][l++] !== "B") sum++;
            if (input[k][l] !== "W") sum++;
          } else {
            if (input[k][l++] !== "W") sum++;
            if (input[k][l] !== "B") sum++;
          }
        }
      }
      if (sum < min) min = sum;
    }
  }
  console.log(min);
};

chess();
