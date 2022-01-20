const star = () => {
  const fs = require("fs");
  let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

  for (let i = 0; i < input; i++) {
    for (let j = 1; j < 2 * input - i; j++) {
      if (j <= i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
  for (let i = 1; i < input; i++) {
    for (let j = 1; j < input + i + 1; j++) {
      if (j < input - i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
};

star();
