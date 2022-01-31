const prime = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[1]
    .split(" ")
    .map(Number);
  let eratos = Array.from({ length: 1001 }, (n, i) => (i === 1 ? false : true));
  for (let i = 2; i < 38; i++) {
    if (eratos[i]) for (let j = 2; j < 501; j++) eratos[i * j] = false;
  }
  let ans = 0;
  for (let i of input) if (eratos[i]) ans++;
  console.log(ans);
};

prime();
