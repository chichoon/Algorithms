const manage = () => {
  const [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  for (let c of arr) console.log(c.toLowerCase());
};

manage();
