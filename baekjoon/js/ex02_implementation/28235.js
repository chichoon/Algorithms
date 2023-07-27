const master = () => {
  const word = require("fs").readFileSync("/dev/stdin").toString().trim();
  switch (word) {
    case "SONGDO":
      console.log("HIGHSCHOOL");
      break;
    case "CODE":
      console.log("MASTER");
      break;
    case "2023":
      console.log("0611");
      break;
    case "ALGORITHM":
      console.log("CONTEST");
      break;
  }
};

master();
