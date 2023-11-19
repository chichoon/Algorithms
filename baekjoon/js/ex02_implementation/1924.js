const date = () => {
  const [x, y] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const monthDateArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dateArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const dateSum =
    monthDateArr.reduce((acc, cur, idx) => {
      if (idx >= x) return acc;
      return (acc += cur);
    }, 0) + y;
  console.log(dateArr[(dateSum - 1) % 7]);
};

date();
