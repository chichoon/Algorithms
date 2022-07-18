const sanggeunald = () => {
  let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(Math.min(arr[0], arr[1], arr[2]) + Math.min(arr[3], arr[4]) - 50);
};

sanggeunald();
