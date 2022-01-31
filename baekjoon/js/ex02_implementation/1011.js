const alphaCentauri = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  input.shift();
  let ans = [];
  for (let i of input) {
    let tmp = i.split(" ").map(Number);
    let sub = tmp[1] - tmp[0];
    let j = 1;
    while (1) {
      if ((j - 1) * (j - 1) < sub && sub <= j * j) break;
      j++;
    }
    if (sub >= (j - 1) * (j - 1) + j) ans.push(j * 2 - 1);
    else ans.push(j * 2 - 2);
  }
  console.log(ans.join("\n"));
};

alphaCentauri();
