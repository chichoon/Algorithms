const howMuch = () => {
  const [time, isAlcohol] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  if (time >= 12 && time <= 16 && !isAlcohol) console.log(320);
  else console.log(280);
};

howMuch();
