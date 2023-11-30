const read = () => {
  const str = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let newStr = "";

  let n = 0;

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
      if (!str[j][i]) {
        n++;
        continue;
      }
      newStr += str[j][i];
    }
    if (n === 5) break;
    n = 0;
  }
  console.log(newStr);
};

read();
