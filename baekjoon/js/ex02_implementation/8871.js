const zadanie = () => {
  let i =
    parseInt(require("fs").readFileSync("/dev/stdin").toString().trim()) + 1;
  console.log(`${i * 2} ${i * 3}`);
};

zadanie();
