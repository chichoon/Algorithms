const gumgum = () => {
  const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  console.log(arr.length);
};

gumgum();
