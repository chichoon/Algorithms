const parallel = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  if (
    (input[0] - input[2]) * (input[3] - input[5]) ===
    (input[2] - input[4]) * (input[1] - input[3])
  )
    console.log(-1);
  else if (
    (!(input[0] - input[2]) && !(input[2] - input[4])) ||
    (!(input[1] - input[3]) && !(input[3] - input[5]))
  )
    console.log(-1);
  else {
    let line = [
      Math.sqrt(
        Math.pow(input[0] - input[2], 2) + Math.pow(input[1] - input[3], 2)
      ),
      Math.sqrt(
        Math.pow(input[2] - input[4], 2) + Math.pow(input[3] - input[5], 2)
      ),
      Math.sqrt(
        Math.pow(input[0] - input[4], 2) + Math.pow(input[1] - input[5], 2)
      ),
    ];
    let lineMax = Math.max(
      line[0] + line[1],
      line[1] + line[2],
      line[0] + line[2]
    );
    let lineMin = Math.min(
      line[0] + line[1],
      line[1] + line[2],
      line[0] + line[2]
    );
    console.log((lineMax - lineMin) * 2);
  }
};

parallel();
