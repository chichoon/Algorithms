const pokemon = () => {
  let [a, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const [n, m] = a.split(" ").map(Number);
  let pokedex = {};
  let ans = [];
  for (let i = 0; i < n; i++) pokedex[arr[i]] = i + 1;
  for (let i = n; i < m + n; i++) {
    if (isNaN(Number(arr[i]))) ans.push(pokedex[arr[i]]);
    else ans.push(arr[Number(arr[i]) - 1]);
  }
  console.log(ans.join("\n"));
};

pokemon();
