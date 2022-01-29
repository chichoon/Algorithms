const sum = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let ans = 0;
  while (input) ans += input--;
  console.log(ans);
};

sum();
