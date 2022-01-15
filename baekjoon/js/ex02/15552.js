const fastAdd = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(
      parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
    );
  }
  console.log(arr.join("\n"));
};

fastAdd();
