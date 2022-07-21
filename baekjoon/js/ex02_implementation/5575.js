const time = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  for (let i = 0; i < 3; i++) {
    let sec = input[i][5] - input[i][2];
    let min = input[i][4] - input[i][1];
    let hr = input[i][3] - input[i][0];
    if (sec < 0) {
      sec += 60;
      min -= 1;
    }
    if (min < 0) {
      min += 60;
      hr -= 1;
    }
    console.log(`${hr} ${min} ${sec}`);
  }
};

time();
