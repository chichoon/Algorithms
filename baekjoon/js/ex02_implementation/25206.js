const score = () => {
  let val = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v1) => v1.split(" "));

  const gradeMap = {
    "A+": 4.5,
    A0: 4,
    "B+": 3.5,
    B0: 3,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0,
  };

  let sum = 0;
  let sumOfTotal = 0;

  for (const v of val) {
    const n = Number(v[1]);
    const m = gradeMap[v[2]];

    if (v[2] !== "P") {
      sumOfTotal += n;
      sum += n * m;
    }
  }
  console.log(sum / sumOfTotal);
};

score();
