const lower = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().trim();
  let ans = "";
  for (let i of input) {
    if (i === i.toLowerCase()) ans += i.toUpperCase();
    else ans += i.toLowerCase();
  }
  console.log(ans);
};

lower();
