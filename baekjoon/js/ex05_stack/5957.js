const dish = () => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let dish = Array.from(
    { length: parseInt(input[0]) },
    (val, idx) => idx + 1
  ).reverse();
  let cleaned = [];
  let dried = [];

  for (let i of input) {
    let cd = i.split(" ").map((n) => {
      return parseInt(n);
    });
    if (cd[0] === 1) {
      for (let j = 0; j < cd[1]; j++) cleaned.push(dish.pop());
    } else if (cd[0] === 2) {
      for (let j = 0; j < cd[1]; j++) dried.push(cleaned.pop());
    }
  }
  console.log(dried.reverse().join("\n"));
};

dish();
