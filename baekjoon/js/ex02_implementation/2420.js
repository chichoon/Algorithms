const safari = () => {
  let [i, j] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(i < j ? j - i : i - j);
};

safari();
