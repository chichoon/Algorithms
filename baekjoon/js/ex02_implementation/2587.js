const daepyo = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  let sum = 0;
  const arr = input.map((n) => {
    return Number(n);
  });
  arr.forEach((n) => {
    sum += n;
  });
  console.log(sum / 5);
  console.log(
    arr.sort((a, b) => {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    })[3]
  );
};

daepyo();
