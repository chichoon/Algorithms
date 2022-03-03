const doby = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  const length = input.length;
  let i = 0;
  let ans = [];
  while (i < length) {
    let testCase = parseInt(input[i]);
    if (!testCase) break;
    let stack = [];
    i++;
    for (let j = 0; j < testCase; j++) stack.push(input[i++]);
    ans.push(
      stack.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        else if (a.toLowerCase() < b.toLowerCase()) return -1;
        else return 0;
      })[0]
    );
  }
  console.log(ans.join("\n"));
};

doby();
