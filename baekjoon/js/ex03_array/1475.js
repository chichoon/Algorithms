const dasom = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim();
  let arr = [];
  let max = -1;

  for (let i = 0; i < 10; i++) {
    arr.push(
      input.length - input.split(String.fromCharCode(48 + i)).join("").length
    );
  }
  arr[6] = parseInt((arr[6] + arr[9]) / 2) + ((arr[6] + arr[9]) % 2);
  arr[9] = arr[6];
  console.log(Math.max(...arr));
};

dasom();
