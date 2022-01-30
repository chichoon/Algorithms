const dial = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().trim();
  let time = 0;
  let arr = [
    3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10,
    10, 10,
  ];
  for (let i of input) {
    time += arr[i.charCodeAt() - 65];
  }
  console.log(time);
};

dial();
