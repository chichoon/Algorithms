const threeDice = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().split("\n");
  const arr = input[0].split(" ");

  switch (true) {
    case arr[0] === arr[1] && arr[1] === arr[2]:
      console.log(Number(arr[0]) * 1000 + 10000);
      break;
    case arr[0] === arr[1] || arr[1] === arr[2]:
      console.log(Number(arr[1]) * 100 + 1000);
      break;
    case arr[0] === arr[2]:
      console.log(Number(arr[2]) * 100 + 1000);
      break;
    default:
      console.log(Number(arr.sort()[2]) * 100);
      break;
  }
};

threeDice();
