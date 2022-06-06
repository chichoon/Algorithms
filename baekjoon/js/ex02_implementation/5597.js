const assignment = () => {
  let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  let ans = Array.from({ length: 30 }, (v) => false);
  for (let i of arr) ans[i - 1] = true;
  console.log(
    ans
      .reduce((prev, curr, idx) => {
        if (!curr) return [...prev, idx + 1];
        return prev;
      }, [])
      .join("\n")
  );
};

assignment();
