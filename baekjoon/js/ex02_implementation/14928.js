const big = () => {
  let n = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());
  console.log(String(n % BigInt(20000303)));
};

big();
