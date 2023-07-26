const vowel = () => {
  const [n, s] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const vowels = "aeiou";
  let cnt = 0;
  for (let c of s) if (vowels.includes(c)) cnt++;
  console.log(cnt);
};

vowel();
