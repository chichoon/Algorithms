const notSelfNum = (n, a) => {
  let sum = n;
  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  if (sum > 10000) return;
  a[sum] = true;
  notSelfNum(sum, a);
};

const self = () => {
  let arr = Array.from({ length: 10001 }, (n) => false);
  for (let i = 1; i < 10001; i++) notSelfNum(i, arr);
  let ans = [];
  for (let i = 1; i < 10001; i++) {
    if (!arr[i]) ans.push(i);
  }
  console.log(ans.join("\n"));
};

self();
