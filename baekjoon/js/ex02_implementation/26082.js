const warboy = () => {
  const [a, b, c] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log((b / a) * 3 * c);
};

warboy();
