const kayak = () => {
  const [_, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const numbers = "123456789";
  let score = [];
  let ans = [];
  let rate = 1;
  for (let line of arr) {
    let cnt = 0;
    for (let i in line) {
      if (line[i] === ".") cnt++;
      else if (numbers.includes(line[i])) {
        score.push([Number(line[i]), cnt]);
        break;
      }
    }
  }
  score = score.sort((a, b) => b[1] - a[1]);
  ans.push([score[0][0], rate]);
  for (let i = 1; i < score.length; i++) {
    if (score[i][1] < score[i - 1][1]) rate++;
    ans.push([score[i][0], rate]);
  }
  ans = ans.sort((a, b) => a[0] - b[0]);
  for (a of ans) console.log(a[1]);
};

kayak();
