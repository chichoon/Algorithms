const darius = () => {
  let [k, d, a] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("/")
    .map(Number);
  if (d === 0 || k + a < d) console.log("hasu");
  else console.log("gosu");
};

darius();
