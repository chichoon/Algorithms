const editor = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let list = new LinkedList();
  let str = [...input[0]];
  let cursor = str.length + 1;

  //  h e l l o
  //  0 1 2 3 4
  // 0 1 2 3 4 5 -> 커서의 왼쪽: 인덱스 -1

  for (let i in input) {
    if (parseInt(i) === 0 || parseInt(i) === 1) continue;
    switch (input[i][0]) {
      case "L":
        if (cursor > 0) cursor--;
        break;
      case "D":
        if (cursor < str.length + 1) cursor++;
        break;
      case "B":
        if (cursor > 0) {
          str = [...str.slice(0, cursor), ...str.slice(cursor + 1)];
          cursor--;
        }
        break;
      case "P":
        str = [...str.slice(0, cursor), input[i][2], ...str.slice(cursor)];
        break;
    }
  }
  console.log(str.join(""));
};

editor();
