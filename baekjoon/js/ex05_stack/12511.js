const magicka = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  let idx = 1;

  for (i of input) {
    let arr = i.split(" ");
    let stack = [];
    let base = arr[arr.length - 1].split("").reverse();
    const combine = parseInt(arr[0]) ? arr[1] : null;
    const oppose = combine
      ? parseInt(arr[2])
        ? arr[3]
        : null
      : parseInt(arr[1])
      ? arr[2]
      : null;
    let flag;

    while (base.length > 0) {
      flag = false;
      stack.push(base.pop());
      if (combine) {
        if (stack.length > 1) {
          if (
            stack[stack.length - 1] + stack[stack.length - 2] ===
              combine.slice(0, 2) ||
            stack[stack.length - 2] + stack[stack.length - 1] ===
              combine.slice(0, 2)
          ) {
            stack.pop();
            stack.pop();
            stack.push(combine[2]);
            flag = true;
          }
        }
      }
      if (!flag && oppose) {
        if (stack.indexOf(oppose[0]) >= 0 && stack.indexOf(oppose[1]) >= 0)
          while (stack.length > 0) stack.pop();
      }
    }
    console.log(`Case #${idx}: [${stack.join(", ")}]`);
    idx++;
  }
};

magicka();
