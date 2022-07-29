const finger = () => {
  let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  switch (n % 8) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 0:
      console.log(2);
      break;
    case 3:
    case 7:
      console.log(3);
      break;
    case 4:
    case 6:
      console.log(4);
      break;
    case 5:
      console.log(5);
      break;
  }
};

finger();
