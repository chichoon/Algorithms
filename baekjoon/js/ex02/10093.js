const num = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim();
  const min =
    Number(input.split(" ")[0]) < Number(input.split(" ")[1])
      ? Number(input.split(" ")[0])
      : Number(input.split(" ")[1]);
  const max =
    Number(input.split(" ")[0]) > Number(input.split(" ")[1])
      ? Number(input.split(" ")[0])
      : Number(input.split(" ")[1]);
  let arr = [];

  if (max === min) console.log("0");
  else console.log(max - min - 1);
  for (let i = min + 1; i < max; i++) {
    arr.push(i);
  }
  console.log(arr.join(" "));
};

num();
