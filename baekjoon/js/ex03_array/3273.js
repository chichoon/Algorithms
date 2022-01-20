const sum = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const arr = input[1].split(" ").map((n) => {
    return parseInt(n);
  });
  const sum = parseInt(input[2]);
  let arrAvailable = [];
  let ret = 0;

  for (let i = 0; i < 2000001; i++) {
    arrAvailable.push(false);
  }
  for (let i = 0; i < arr.length; i++) {
    if (sum - arr[i] > 0 && arrAvailable[sum - arr[i]]) ret++;
    arrAvailable[arr[i]] = true;
  }
  console.log(ret);
};

sum();
