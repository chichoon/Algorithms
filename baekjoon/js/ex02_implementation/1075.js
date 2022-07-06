const divide = () => {
  let [m, n] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  m = Math.floor(m / 100) * 100;
  let i = 0;
  for (i; i < 100; i++) if (!((m + i) % n)) break;
  if (i.toString().length < 2) console.log("0" + i.toString());
  else console.log(i.toString());
};

divide();
