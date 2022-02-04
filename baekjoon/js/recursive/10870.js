const recurFibo = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return recurFibo(n - 2) + recurFibo(n - 1);
};

const fibonacci = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  console.log(recurFibo(input));
};

fibonacci();
