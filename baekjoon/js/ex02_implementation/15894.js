const square = () => {
  let i = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  console.log(i * 4);
};

square();
