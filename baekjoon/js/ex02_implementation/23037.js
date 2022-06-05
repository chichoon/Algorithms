const five = () => {
  console.log(
    require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split("")
      .map(Number)
      .reduce((p, c) => (p += c * c * c * c * c), 0)
  );
};

five();
