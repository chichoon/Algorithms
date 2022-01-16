const wash = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  const arr = input[0].split(" ");
  let ret = [];
  for (let i in arr) {
    ret.push(Number(arr[i]));
  }
  console.log(
    `${ret
      .sort((a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
      })
      .join(" ")}`
  );
};

wash();
