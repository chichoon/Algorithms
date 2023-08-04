const time = () => {
  const date = Number(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  console.log(date * 24);
};

time();
