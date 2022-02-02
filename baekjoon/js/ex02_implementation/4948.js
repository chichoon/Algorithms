const chebyshev = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  let eratos = Array.from({ length: 246913 }, (n, i) =>
    i === 1 ? false : true
  );
  const range = Math.sqrt(246913);
  for (let i = 2; i <= range; i++) {
    if (eratos[i]) for (let j = 2; j <= 246913 / i; j++) eratos[i * j] = false;
  }
  let ans = [];
  for (let i of input) {
    if (!i) break;
    let sum = 0;
    for (let j = i + 1; j <= 2 * i; j++) if (eratos[j]) sum++;
    ans.push(sum);
  }
  console.log(ans.join("\n"));
};

chebyshev();
