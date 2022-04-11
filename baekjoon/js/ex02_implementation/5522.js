const avg = () => {
  console.log(
    require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
};

avg();
