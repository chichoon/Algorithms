const recurHanoi = (n, start, end, arr) => {
  if (n === 1) arr.push(`${start} ${end}`);
  else {
    recurHanoi(n - 1, start, 6 - start - end, arr);
    arr.push(`${start} ${end}`);
    recurHanoi(n - 1, 6 - start - end, end, arr);
  }
};

const hanoi = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let arr = [];
  recurHanoi(input, 1, 3, arr);
  console.log(arr.length);
  console.log(arr.join("\n"));
};

hanoi();
