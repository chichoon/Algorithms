const blackJack = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const n = parseInt(input[0].split(" ")[0]);
  const m = parseInt(input[0].split(" ")[1]);
  const arr = input[1].split(" ").map((n) => {
    return parseInt(n);
  });
  let sum = -1000000;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (
          arr[i] + arr[j] + arr[k] <= m &&
          m - (arr[i] + arr[j] + arr[k]) < m - sum
        ) {
          sum = arr[i] + arr[j] + arr[k];
        }
      }
    }
  }
  console.log(sum);
};

blackJack();
