const add = (acc, n) => {
  return acc + n;
};

const dwarf = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let arr = input.map((n) => {
    return Number(n);
  });
  const sum = arr.reduce(add);

  for (let i = 0; i + 1 < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        const newArr = [
          ...arr.slice(0, i),
          ...arr.slice(i + 1, j),
          ...arr.slice(j + 1),
        ];
        console.log(
          newArr
            .sort((a, b) => {
              if (a > b) return 1;
              if (a === b) return 0;
              if (a < b) return -1;
            })
            .join("\n")
        );
        return;
      }
    }
  }
};

dwarf();
