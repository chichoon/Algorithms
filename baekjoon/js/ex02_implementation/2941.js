const croatian = () => {
  console.log(
    require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .replace(/(c=)|(c-)|(dz=)|(d-)|(lj)|(nj)|(s=)|(z=)/g, "*").length
  );
};

croatian();
