const num = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const arr = input.map((n) => {
    return parseInt(n);
  });
  const mul = String(arr[0] * arr[1] * arr[2]);

  for (let i = 0; i < 10; i++) {
    console.log(
      mul.length - mul.split(String.fromCharCode(48 + i)).join("").length
    );
  }
};

num();
