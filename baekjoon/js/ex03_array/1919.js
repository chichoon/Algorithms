const annagram = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let arr1 = Array.from({ length: 26 }, () => 0);
  let arr2 = Array.from({ length: 26 }, () => 0);
  let del = 0;

  for (let j in input[0]) {
    arr1[input[0][j].charCodeAt() - 97]++;
  }
  for (let j in input[1]) {
    arr2[input[1][j].charCodeAt() - 97]++;
  }
  for (let j in arr1) {
    while (arr1[j] > arr2[j]) {
      arr1[j]--;
      del++;
    }
    while (arr2[j] > arr1[j]) {
      arr2[j]--;
      del++;
    }
  }
  console.log(del);
};

annagram();
