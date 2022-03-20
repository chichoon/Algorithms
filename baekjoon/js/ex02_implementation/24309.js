const pabehctbo = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(BigInt);
  console.log(
    BigInt((input[1] - input[2]) / input[0])
      .toString()
      .split("n")[0]
  );
};

pabehctbo();
