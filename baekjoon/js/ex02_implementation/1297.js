const tv = () => {
  let [d, h, w] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  let ratio = Math.sqrt(d * d) / Math.sqrt(h * h + w * w);
  console.log(`${parseInt(ratio * h)} ${parseInt(ratio * w)}`);
};

tv();
