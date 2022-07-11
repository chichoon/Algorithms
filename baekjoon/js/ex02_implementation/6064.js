const getOrder = (m, n, x, y) => {
  // order = k번째 라고 할 때
  // k를 m으로 나누면 나머지가 x
  // k를 n으로 나누면 나머지가 y
  // k - x는 m으로 나누어 떨어진다 (m의 배수)
  // k - y는 n으로 나누어 떨어진다 (n의 배수)
  // k = x + (m의 배수)
  // k = y + (n의 배수)
  const nm = n * m;
  let k = x;
  while (k <= nm) {
    // k는 n과 m의 최소공배수 (또는 n * m) 보다 작음 (세계최후의 날)
    if (!((k - y) % n)) return k; // k - y는 n으로 나누어떨어져야 하므로 조건문 추가
    k += m; // k는 x + m의배수이므로 m을 계속 더해줌
  }
  return -1;
};

const inca = () => {
  let [[t], ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
  let ans = [];
  for (let v of arr) ans.push(getOrder(v[0], v[1], v[2], v[3]));
  console.log(ans.join("\n"));
};

inca();
