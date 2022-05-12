const sum = () => {
  let s = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
  let sum = 0,
    i = 1,
    n = 0;
  while (true) {
    if (sum + i > s) break;
    sum += i;
    i++;
    n++;
  }
  console.log(n);
};

sum();
