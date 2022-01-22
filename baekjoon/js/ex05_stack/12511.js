const magicka = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  let idx = 1;

  for (i of input) {
    let arr = i.split(" ");
    let stack = [];
    let base = arr[arr.length - 1].split("");
    const combine = parseInt(arr[0]) ? arr[1] : null;
    const oppose = combine
      ? parseInt(arr[2])
        ? arr[3]
        : null
      : parseInt(arr[1])
      ? arr[2]
      : null;

    for (s of base) {
      stack.push(s);
      if (combine && stack.length > 1) {
        if (
          stack[stack.length - 1] + stack[stack.length - 2] ===
            combine.slice(0, 2) ||
          stack[stack.length - 2] + stack[stack.length - 1] ===
            combine.slice(0, 2)
        ) {
          stack = [...stack.slice(0, stack.length - 2), combine[2]];
        }
      }
      if (oppose)
        if (stack.indexOf(oppose[0]) >= 0 && stack.indexOf(oppose[1]) >= 0)
          stack = [];
    }
    console.log(`Case #${idx}: [${stack.join(", ")}]`);
    idx++;
  }
};

magicka();
