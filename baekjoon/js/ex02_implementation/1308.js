const getDayOfYear = (year, month, day) => {
  const monthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let d = 0;
  for (let y = 0; y < year; y++) {
    d += 365 + isLeap(y);
  }
  for (let i = 1; i < month; i++) {
    if (i === 2) d += isLeap(year);
    d += monthDay[i];
  }
  return d + day;
};

const isLeap = (year) => {
  if (year % 4 !== 0) return 0;
  if (year % 100 !== 0) return 1;
  if (year % 400 === 0) return 1;
  return 0;
};

const gg = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  let today = getDayOfYear(input[0][0], input[0][1], input[0][2]);
  let dday = getDayOfYear(input[1][0], input[1][1], input[1][2]);
  let thousandDay = getDayOfYear(input[0][0] + 1000, input[0][1], input[0][2]);
  if (dday - today >= thousandDay - today) console.log("gg");
  else console.log(`D-${dday - today}`);
};

gg();
