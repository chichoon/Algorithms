const star = () => {
  const fs = require("fs");
  let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

  for (let i = 1; i < input + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

star();
