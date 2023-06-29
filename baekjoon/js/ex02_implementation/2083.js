const rugby = () => {
  const users = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "))
    .slice(0, -1);
  const ans = [];
  for (let user of users) {
    if (Number(user[1]) > 17 || Number(user[2]) >= 80)
      ans.push(user[0] + " Senior");
    else ans.push(user[0] + " Junior");
  }
  console.log(ans.join("\n"));
};

rugby();
