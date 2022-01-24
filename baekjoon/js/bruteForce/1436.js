const shom = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let num = 0;
  while (1) {
    num++;
    if (num.toString().includes("666")) input--;
    if (input === 0) break;
  }
  console.log(num);
};

shom();
