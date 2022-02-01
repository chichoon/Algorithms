const prime = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let eratos = Array.from({ length: 1000001 }, (n, i) =>
    i === 1 ? false : true
  );
  for (let i = 2; i < 1002; i++) {
    if (eratos[i]) for (let j = 2; j < 1000002 / i; j++) eratos[i * j] = false;
  }
  let ans = [];
  for (let i = input[0]; i <= input[1]; i++) if (eratos[i]) ans.push(i);
  console.log(ans.join("\n"));
};

prime();
