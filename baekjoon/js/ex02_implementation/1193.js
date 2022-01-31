const fraction = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let left = 1;
  let right = 1;
  let n = 1;
  let i = 1;
  while (1) {
    if (i === input) break;
    if (n % 2 && left === 1) right = ++n;
    else if (!(n % 2) && right === 1) left = ++n;
    else {
      left += n % 2 ? -1 : 1;
      right += n % 2 ? 1 : -1;
    }
    i++;
  }
  console.log(`${left}/${right}`);
};

fraction();
