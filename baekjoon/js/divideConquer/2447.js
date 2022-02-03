const recurStar = (size) => {
  if (size === 3) return ["***", "* *", "***"];
  const prev = recurStar(size / 3);
  let ret = [];
  for (let line of prev) {
    ret.push(line.repeat(3));
  }
  for (let line of prev) {
    ret.push(line + " ".repeat(size / 3) + line);
  }
  for (let line of prev) {
    ret.push(line.repeat(3));
  }
  return ret;
};

const star = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  const arr = recurStar(input);
  console.log(arr.join("\n"));
};

star();
