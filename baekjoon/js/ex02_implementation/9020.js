const goldbach = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  input.shift();
  let eratos = Array.from({ length: 10000 }, (n, i) =>
    i === 1 ? false : true
  );
  for (let i = 2; i < 501; i++) {
    if (eratos[i]) for (let j = 2; j < 5001; j++) eratos[i * j] = false;
  }
  let ans = [];
  for (let i of input) {
    for (let j = i / 2; j > 0; j--) {
      if (eratos[j] && eratos[i - j]) {
        ans.push(String(j) + " " + String(i - j));
        break;
      }
    }
  }
  console.log(ans.join("\n"));
};

goldbach();
