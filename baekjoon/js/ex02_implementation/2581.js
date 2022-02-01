const prime = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  let eratos = Array.from({ length: 10000 }, (n, i) =>
    i === 1 ? false : true
  );
  for (let i = 2; i < 500; i++) {
    if (eratos[i]) for (let j = 2; j < 5001; j++) eratos[i * j] = false;
  }
  let sum = 0;
  let min = 0;
  for (let i = input[0]; i <= input[1]; i++) {
    if (eratos[i]) {
      if (min === 0) min = i;
      sum += i;
    }
  }
  if (sum) console.log(`${sum}\n${min}`);
  else console.log("-1");
};

prime();
