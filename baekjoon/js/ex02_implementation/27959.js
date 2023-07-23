const choco = () => {
  const [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  if (100 * n >= m) console.log("Yes");
  else console.log("No");
};

choco();
