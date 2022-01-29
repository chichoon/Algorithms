const dimension = () => {
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let input = [];
  rl.on("line", function (line) {
    input.push(parseInt(line));
  }).on("close", function () {
    console.log(input[0] > 0 ? (input[1] > 0 ? 1 : 4) : input[1] > 0 ? 2 : 3);
    process.exit();
  });
};

dimension();
