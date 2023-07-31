const bus = () => {
  const [n, a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  if (b > a) console.log("Bus");
  else if (b === a) console.log("Anything");
  else console.log("Subway");
};

bus();
