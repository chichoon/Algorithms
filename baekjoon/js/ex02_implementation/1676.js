const factorial = () => {
  let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 125 === 0) ans += 3;
    else if (i % 25 === 0) ans += 2;
    else if (i % 5 === 0) ans += 1;
  }
  console.log(ans);
};

factorial();
