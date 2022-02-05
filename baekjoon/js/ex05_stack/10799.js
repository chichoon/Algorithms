const ironStick = () => {
  let input = require("fs").readFileSync("/dev/stdin").toString().trim();
  let ans = 0;
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === ")") {
      ans += stack.length;
      i++;
    } else if (input[i] === "(") stack.push(1);
    else {
      stack.pop();
      ans++;
    }
  }
  console.log(ans);
};

ironStick();
