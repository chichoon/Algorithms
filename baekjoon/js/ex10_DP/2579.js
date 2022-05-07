const stair = () => {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  if (input[0] === 1) {
    console.log(input[1]);
    return;
  }
  let dp = Array.from(
    { length: input[0] + 1 },
    (v) => (v = Array.from({ length: 3 }, (n) => 0))
  );
  (dp[1][1] = input[1]),
    (dp[2][1] = input[2]),
    (dp[2][2] = input[1] + input[2]);

  for (let i = 3; i <= input[0]; i++) {
    dp[i][1] = Math.max(dp[i - 2][1], dp[i - 2][2]) + input[i];
    dp[i][2] = dp[i - 1][1] + input[i];
  }
  console.log(Math.max(...dp[input[0]]));
};

stair();
