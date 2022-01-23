const hashing = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let hash = 0;
  const len = parseInt(input[0]);
  const arr = input[1];
  for (let i = 0; i < len; i++) {
    let pow = 1;
    for (let j = 0; j < i; j++) {
      pow = (pow * 31) % 1234567891;
    }
    hash += (arr[i].charCodeAt() - 96) * pow;
    hash %= 1234567891;
  }
  console.log(hash);
};

hashing();
