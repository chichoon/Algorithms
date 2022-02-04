const recurFacto = (n) => {
  if (n === 1 || n === 0) return 1;
  else return n * recurFacto(n - 1);
};

const factorial = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  console.log(recurFacto(input));
};

factorial();
