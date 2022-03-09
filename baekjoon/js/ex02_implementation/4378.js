const qwerty = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let stack = [];
  for (let j of input) {
    for (let i of j) {
      switch (i) {
        case "1":
          stack.push("`");
          break;
        case "2":
          stack.push("1");
          break;
        case "3":
          stack.push("2");
          break;
        case "4":
          stack.push("3");
          break;
        case "5":
          stack.push("4");
          break;
        case "6":
          stack.push("5");
          break;
        case "7":
          stack.push("6");
          break;
        case "8":
          stack.push("7");
          break;
        case "9":
          stack.push("8");
          break;
        case "0":
          stack.push("9");
          break;
        case "-":
          stack.push("0");
          break;
        case "=":
          stack.push("-");
          break;
        case "W":
          stack.push("Q");
          break;
        case "E":
          stack.push("W");
          break;
        case "R":
          stack.push("E");
          break;
        case "T":
          stack.push("R");
          break;
        case "Y":
          stack.push("T");
          break;
        case "U":
          stack.push("Y");
          break;
        case "I":
          stack.push("U");
          break;
        case "O":
          stack.push("I");
          break;
        case "P":
          stack.push("O");
          break;
        case "[":
          stack.push("P");
          break;
        case "]":
          stack.push("[");
          break;
        case "\\":
          stack.push("]");
          break;
        case "S":
          stack.push("A");
          break;
        case "D":
          stack.push("S");
          break;
        case "F":
          stack.push("D");
          break;
        case "G":
          stack.push("F");
          break;
        case "H":
          stack.push("G");
          break;
        case "J":
          stack.push("H");
          break;
        case "K":
          stack.push("J");
          break;
        case "L":
          stack.push("K");
          break;
        case ";":
          stack.push("L");
          break;
        case "'":
          stack.push(";");
          break;
        case "X":
          stack.push("Z");
          break;
        case "C":
          stack.push("X");
          break;
        case "V":
          stack.push("C");
          break;
        case "B":
          stack.push("V");
          break;
        case "N":
          stack.push("B");
          break;
        case "M":
          stack.push("N");
          break;
        case ",":
          stack.push("M");
          break;
        case ".":
          stack.push(",");
          break;
        case "/":
          stack.push(".");
          break;
        case " ":
          stack.push(" ");
          break;
      }
    }
    stack.push("\n");
  }
  console.log(stack.join(""));
};

qwerty();
