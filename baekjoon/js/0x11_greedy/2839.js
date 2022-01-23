const sugar = () => {
  const fs = require("fs");
  let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
  let five = parseInt(input / 5);
  let three = -1;

  while (five >= 0) {
    if ((input - 5 * five) % 3 === 0) {
      three = (input - 5 * five) / 3;
      break;
    }
    five--;
  }
  if (three < 0) console.log("-1");
  else console.log(five + three);
};

sugar();
