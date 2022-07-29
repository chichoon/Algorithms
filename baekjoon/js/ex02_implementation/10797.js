const car = () => {
  const [[n], car] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  console.log(car.filter((v) => v === n).length);
};

car();
