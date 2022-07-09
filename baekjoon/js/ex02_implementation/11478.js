const str = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().trim();
  const set = new Set();
  const length = input.length;
  for (let i = 0; i < length; i++)
    for (let j = i + 1; j < length + 1; j++) set.add(input.slice(i, j));
  console.log(set.size);
};

str();
