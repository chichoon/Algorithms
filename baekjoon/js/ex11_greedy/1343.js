const polio = () => {
  let str = require("fs").readFileSync("/dev/stdin").toString().trim();
  let con = 0;
  const strlen = str.length;
  let ans = "";
  for (let i = 0; i < strlen; i++) {
    if (str[i] === ".") {
      while (con >= 2) {
        if (con >= 4) {
          ans += "AAAA";
          con -= 4;
        } else if (con >= 2) {
          ans += "BB";
          con -= 2;
        }
      }
      if (con !== 0) {
        console.log(-1);
        return;
      }
      ans += ".";
    } else con++;
  }
  while (con >= 2) {
    if (con >= 4) {
      ans += "AAAA";
      con -= 4;
    } else if (con >= 2) {
      ans += "BB";
      con -= 2;
    }
  }
  if (con !== 0) console.log(-1);
  else console.log(ans);
};

polio();
