const star = () => {
  const fs = require("fs");
  let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

  for (let i = 1; i < input + 1; i++) {
    for (let j = input - i; j > 0; j--) {
      process.stdout.write(" ");
    }
    for (let j = 1; j < 2 * i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  for (let i = 1; i < input; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 2 * (input - i - 1); j >= 0; j--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

star();
