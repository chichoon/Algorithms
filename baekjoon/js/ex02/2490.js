const yootNori = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  let numOfZero = 0;

  for (var i in input) {
    if (input[i] !== "") {
      let arr = input[i].split(" ");
      arr.forEach((i) => {
        if (i === "0") numOfZero++;
      });
      switch (true) {
        case numOfZero === 0:
          console.log("E");
          break;
        case numOfZero === 1:
          console.log("A");
          break;
        case numOfZero === 2:
          console.log("B");
          break;
        case numOfZero === 3:
          console.log("C");
          break;
        default:
          console.log("D");
          break;
      }
      numOfZero = 0;
    }
  }
};

yootNori();
