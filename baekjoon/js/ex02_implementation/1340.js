const getMonthInt = (monthStr) => {
  switch (monthStr[0]) {
    case "J":
      if (monthStr[1] === "a") return 1;
      else if (monthStr[2] === "n") return 6;
      else if (monthStr[2] === "l") return 7;
    case "F":
      return 2;
    case "M":
      if (monthStr[2] === "r") return 3;
      else if (monthStr[2] === "y") return 5;
    case "A":
      if (monthStr[1] === "p") return 4;
      else if (monthStr[1] === "u") return 8;
    case "S":
      return 9;
    case "O":
      return 10;
    case "N":
      return 11;
    case "D":
      return 12;
  }
};

const ifLeap = (year) => {
  if (!(year % 400) || (!(year % 4) && year % 100)) return true;
  else return false;
};

const countDay = (month, date, year) => {
  const monthArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (ifLeap(year)) monthArr[2]++;
  let day = 0;
  for (let i = 0; i < month; i++) day += monthArr[i];
  return day + date - 1;
};

const newYear = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
  const month = getMonthInt(input[0]);
  const day = parseInt(input[1]);
  const year = parseInt(input[2]);
  const [hour, minute] = input[3].split(":").map(Number);
  let yearMin = ifLeap(year) ? 366 * 24 * 60 : 365 * 24 * 60;
  let nowMin = countDay(month, day, year) * 24 * 60 + (hour * 60 + minute);
  console.log((nowMin / yearMin) * 100);
};

newYear();
