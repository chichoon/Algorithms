const igrus = () => {
  let [n, m] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  if (m < 3) console.log("NEWBIE!");
  else if (m <= n) console.log("OLDBIE!");
  else console.log("TLE!");
};

igrus();
