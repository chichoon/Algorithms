const recurZ = (n, r, c) => {
  if (n === 0) return 0;
  let halfN = Math.pow(2, n - 1);
  if (r < halfN && c < halfN) return recurZ(n - 1, r, c);
  if (r < halfN && c >= halfN)
    return halfN * halfN + recurZ(n - 1, r, c - halfN);
  if (r >= halfN && c < halfN)
    return 2 * halfN * halfN + recurZ(n - 1, r - halfN, c);
  if (r >= halfN && c >= halfN)
    return 3 * halfN * halfN + recurZ(n - 1, r - halfN, c - halfN);
};

const z = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  console.log(recurZ(input[0], input[1], input[2]));
};

z();
