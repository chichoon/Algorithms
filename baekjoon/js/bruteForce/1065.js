const ifHansu = (n) => {
  let tmp = n.toString();
  if (tmp.length === 1) return true;
  let sub = tmp[0].charCodeAt() - tmp[1].charCodeAt();
  for (let i = 1; i < tmp.length; i++) {
    if (sub !== tmp[i - 1].charCodeAt() - tmp[i].charCodeAt()) return false;
  }
  return true;
};

const hansu = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    if (ifHansu(i)) sum++;
  }
  console.log(sum);
};

hansu();
