const cellPhone = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const arr = input[1].split(" ").map((n) => {
    return Number(n);
  });
  let yeongSik = arr.reduce((acc, n, i) => {
    return acc + Math.floor(n / 30 + 1) * 10;
  }, 0);
  let minSik = arr.reduce((acc, n, i) => {
    return acc + Math.floor(n / 60 + 1) * 15;
  }, 0);

  if (yeongSik < minSik) console.log(`Y ${yeongSik}`);
  else if (yeongSik === minSik) console.log(`Y M ${yeongSik}`);
  else console.log(`M ${minSik}`);
};

cellPhone();
