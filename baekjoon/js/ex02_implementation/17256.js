const cake = () => {
  let [a, c] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  console.log(`${c[0] - a[2]} ${Math.floor(c[1] / a[1])} ${c[2] - a[0]}`);
};

cake();
