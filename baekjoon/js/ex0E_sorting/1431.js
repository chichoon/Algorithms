const serial = () => {
  let [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  arr
    .sort()
    .sort(
      (a, b) =>
        a
          .split("")
          .map(Number)
          .reduce((p, c) => (isNaN(c) ? p + 0 : p + c), 0) -
        b
          .split("")
          .map(Number)
          .reduce((p, c) => (isNaN(c) ? p + 0 : p + c), 0)
    )
    .sort((a, b) => a.length - b.length);
  console.log(arr.join("\n"));
};

serial();
