const minecraft = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const inventory = parseInt(input[0].split(" ")[2]);
  const width = parseInt(input[0].split(" ")[1]);
  const height = parseInt(input[0].split(" ")[0]);
  input.shift();
  const arr = input.map((i) => {
    return i.split(" ").map((n) => {
      return parseInt(n);
    });
  });
  let max = [-1, 100000000000000];

  for (let k = 0; k < 257; k++) {
    let toAdd = 0;
    let toDel = 0;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (arr[i][j] > k) toDel += arr[i][j] - k;
        else if (arr[i][j] < k) toAdd += k - arr[i][j];
      }
    }
    if (toAdd <= inventory + toDel && max[1] >= toDel * 2 + toAdd) {
      max[0] = k;
      max[1] = toDel * 2 + toAdd;
    }
  }
  console.log(`${max[1]} ${max[0]}`);
};

minecraft();
