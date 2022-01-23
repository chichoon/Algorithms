/* 출력 오류 */

const magicka = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const n = parseInt(input[0]);
  input.shift();

  for (let i = 0; i < n; i++) {
    let arr = input[i].split(" ");
    let stack = [];
    let base = arr[arr.length - 1].split("");
    const combine = parseInt(arr[0])
      ? arr.slice(1, parseInt(arr[0]) + 1)
      : null;
    const oppose = combine
      ? parseInt(arr[2])
        ? arr.slice(3, parseInt(arr[2]) + 3)
        : null
      : parseInt(arr[1])
      ? arr.slice(2, parseInt(arr[1]) + 2)
      : null;

    if (combine)
      for (j in combine)
        combine.push(combine[j][1] + combine[j][0] + combine[j][2]);

    for (s of base) {
      stack.push(s);
      if (combine && stack.length > 1) {
        let done = false;
        while (!done) {
          for (tmp of combine) {
            done = true;
            if (
              stack[stack.length - 1] + stack[stack.length - 2] ==
              tmp.slice(0, 2)
            ) {
              stack = [...stack.slice(0, stack.length - 2), tmp[2]];
              done = false;
              break;
            }
          }
        }
      }
      if (oppose) {
        for (tmp of oppose) {
          if (stack.indexOf(tmp[0]) >= 0 && stack.indexOf(tmp[1]) >= 0) {
            stack = [];
            break;
          }
        }
      }
    }
    console.log(`Case #${i + 1}: [${stack.join(", ")}]`);
  }
};

magicka();
