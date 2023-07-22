const judge = () => {
  const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
  for (let i = 0; i < n; i++) {
    console.log(`Hello World, Judge ${i + 1}!`);
  }
};

judge();
