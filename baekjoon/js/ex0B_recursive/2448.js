const recurStar = (n) => {
  if (n === 3) return ["  *  ", " * * ", "*****"];
  const ret = recurStar(n / 2);
  let arr = [];
  for (let j of ret) arr.push(" ".repeat(n / 2) + j + " ".repeat(n / 2));
  for (let j of ret) arr.push(j + " " + j);
  return arr;
};

const star = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  console.log(recurStar(input).join("\n"));
};

star();
