const zadanie = () => {
  console.log(
    require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split("")
      .reverse()
      .join("")
  );
};
zadanie();
