const scicom = () => {
  let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  while (n-- > 0) console.log("SciComLove");
};

scicom();
