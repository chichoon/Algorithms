const hongik = () => {
  let i = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  console.log(i - 1946);
};

hongik();
