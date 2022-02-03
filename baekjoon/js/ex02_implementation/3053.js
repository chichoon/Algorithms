const taxi = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  console.log(`${input * input * Math.PI}\n${input * input * 2}`);
};

taxi();
