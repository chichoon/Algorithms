const factorial = () => {
  const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  let mul = 1;
  for (let i = 1; i <= n; i++) mul *= i;
  console.log(mul);
};

factorial();
