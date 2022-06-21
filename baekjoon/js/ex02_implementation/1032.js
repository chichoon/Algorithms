const prompt = () => {
  let [[n], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const length = arr[0].length;
  let ans = [];
  let flag;
  for (let i = 0; i < length; i++) {
    flag = false;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1][i] !== arr[j][i]) {
        flag = true;
        break;
      }
    }
    ans.push(flag ? "?" : arr[0][i]);
  }
  console.log(ans.join(""));
};

prompt();
