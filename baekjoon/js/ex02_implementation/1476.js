const esm = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (l) => {
    const [e, s, m] = l.split(" ").map(Number);
    let num = 1;
    while (true) {
      if (!((num - e) % 15) && !((num - s) % 28) && !((num - m) % 19)) {
        console.log(num);
        process.exit();
      }
      num++;
    }
  });
};

esm();
