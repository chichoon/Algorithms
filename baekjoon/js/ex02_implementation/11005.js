const numLength = (num, base) => {
  let len = 1;

  while (num >= base) {
    len++;
    num = Math.floor(num / base);
  }
  return len;
};

const convert = () => {
  let [num, base] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let newStr = "";
  let numLen = numLength(num, base);

  while (numLen) {
    newStr = arr[num % base] + newStr;
    num = Math.floor((num /= base));
    numLen--;
  }
  console.log(newStr);
};

convert();
