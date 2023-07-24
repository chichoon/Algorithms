const caps = () => {
  const word = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(word.toUpperCase());
};

caps();
