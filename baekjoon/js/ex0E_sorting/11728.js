const arraySort = (arrA, arrB, sizeA, sizeB) => {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < sizeA || j < sizeB) {
    if (i === sizeA) arr.push(arrB[j++]);
    else if (j === sizeB) arr.push(arrA[i++]);
    else if (arrA[i] < arrB[j]) arr.push(arrA[i++]);
    else arr.push(arrB[j++]);
  }
  return arr;
};

const array = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => n.split(" ").map(Number));
  console.log(
    arraySort(input[1], input[2], input[0][0], input[0][1]).join(" ")
  );
};

array();
