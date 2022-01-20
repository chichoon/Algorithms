const testScore = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  const score = Number(input[0]);

  switch (true) {
    case score <= 100 && score >= 90:
      console.log("A");
      break;
    case score < 90 && score >= 80:
      console.log("B");
      break;
    case score < 80 && score >= 70:
      console.log("C");
      break;
    case score < 70 && score >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
      break;
  }
};

testScore();
