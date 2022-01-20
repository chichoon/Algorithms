const count = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let arr = input[1].split(" ").map((n) => {
    return parseInt(n);
  });
  let arrCount = [];

  for (let i = 0; i < 202; i++) {
    arrCount.push(0);
  }
  for (let i in arr) {
    arrCount[arr[i] + 100]++;
  }
  console.log(arrCount[parseInt(input[2]) + 100]);
};

count();
