const strfry = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  for (let i in input) {
    if (i == 0) continue;
    let arr = Array.from({ length: 26 }, () => 0);
    let flag = true;
    const str1 = input[i].split(" ")[0];
    const str2 = input[i].split(" ")[1];
    for (let j in str1) {
      arr[str1[j].charCodeAt() - 97]++;
    }
    for (let j in str2) {
      arr[str2[j].charCodeAt() - 97]--;
    }
    for (let j in arr) {
      if (arr[j] !== 0) {
        console.log("Impossible");
        flag = false;
        break;
      }
    }
    if (flag) console.log("Possible");
  }
};

strfry();
