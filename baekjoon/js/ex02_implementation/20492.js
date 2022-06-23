const tax = () => {
  let i = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  console.log(`${(i / 100) * 78} ${i - (i / 10000) * 20 * 22}`);
};

tax();
