const rippo = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  console.log(input * input * input);
};

rippo();
