const alpha = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim();
  let arr = [];
  for (let i = 0; i < 26; i++) {
    arr.push(
      input.length - input.split(String.fromCharCode(97 + i)).join("").length
    );
  }
  console.log(arr.join(" "));
};

alpha();
