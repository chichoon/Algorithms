const getMul = (num) => {
  let ret = 1;
  for (let i of num) ret *= Number(i);
  return ret;
};

const yujinsu = () => {
  let i = Number(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  ).toString();
  const len = i.length;
  let left, right;
  let ifYujinsu = false;
  for (let j = 1; j < len; j++) {
    left = i.slice(0, j);
    right = i.slice(j);
    if (!ifYujinsu && getMul(left) === getMul(right)) {
      console.log("YES");
      ifYujinsu = true;
    }
  }
  if (!ifYujinsu) console.log("NO");
};

yujinsu();
