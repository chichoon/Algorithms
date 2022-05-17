const teamPlay = () => {
  let s = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
  console.log(Math.floor(s % 5 ? s / 5 + 1 : s / 5));
};

teamPlay();
