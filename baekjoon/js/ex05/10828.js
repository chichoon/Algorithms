const stack = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let arr = [];
  let arrPop;
  let arrLen = 0;
  let str = [];

  for (let i of input) {
    switch (i.split(" ")[0]) {
      case "push":
        arr.push(i.split(" ")[1]);
        arrLen++;
        break;
      case "pop":
        arrPop = arr.pop();
        str.push(arrPop ? arrPop : "-1");
        if (arrPop !== undefined) arrLen--;
        break;
      case "size":
        str.push(arrLen);
        break;
      case "empty":
        str.push(arrLen === 0 ? "1" : "0");
        break;
      case "top":
        str.push(arr[arrLen - 1] ? arr[arrLen - 1] : "-1");
        break;
      default:
        break;
    }
  }
  console.log(str.join("\n"));
};

stack();
