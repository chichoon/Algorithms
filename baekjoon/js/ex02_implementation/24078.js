const remainder = () => {
  console.log(
    Number(require("fs").readFileSync("/dev/stdin").toString().trim()) % 21
  );
};

remainder();
