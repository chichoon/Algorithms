const star = () => {
  const fs = require("fs");
  let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

  for (let i = 0; i < input; i++) {
    for (let j = 0; j < 2 * input; j++) {
      if (j <= i || j + 1 >= 2 * input - i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
  for (let i = 1; i < input; i++) {
    for (let j = 0; j < 2 * input; j++) {
      if (j < input - i || j >= input + i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
};

star();
