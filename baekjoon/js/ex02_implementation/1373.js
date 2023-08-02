const binary = () => {
  const bin = require("fs").readFileSync("/dev/stdin").toString().trim();
  let oct = "";
  let length = 0;

  if (bin.length % 3 !== 0) {
    length = bin.length % 3;
    oct += parseInt(bin.slice(0, length), 2);
  }

  while (length < bin.length) {
    oct += parseInt(bin.slice(length, length + 3), 2);
    length += 3;
  }
  console.log(oct);
};

binary();
