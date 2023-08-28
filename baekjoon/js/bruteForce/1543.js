const document = () => {
  const [str1, str2] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");
  // .trim()

  const len1 = str1.length;
  const len2 = str2.length;
  let count = 0;
  let lenCnt = 0;

  let i = 0;
  while (i < len1) {
    if (str1[i] === str2[0]) {
      for (let j = 0; j < len2; j++) {
        if (str1[i + j] !== str2[j]) break;
        lenCnt++;
      }
      if (lenCnt === len2) {
        count++;
        i += len2 - 1;
      }
    }
    lenCnt = 0;
    i++;
  }

  console.log(count);
};

document();
