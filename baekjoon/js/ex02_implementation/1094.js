const stick = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  ).toString(2);
  let i = 0;
  for (let c of input) if (c === "1") i++;
  console.log(i);
};

stick();
