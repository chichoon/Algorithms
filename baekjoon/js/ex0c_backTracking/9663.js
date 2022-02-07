let sum = 0;

const recurQueen = (queenArr, queenIdx, queenN) => {
  for (let Xpos = 0; Xpos < queenN; Xpos++) {
    if (queenIdx === 0) {
      queenArr[queenIdx] = Xpos;
      recurQueen(queenArr, queenIdx + 1, queenN);
    } else {
      let count = 0;
      for (let i = 0; i < queenIdx; i++) {
        let gradient = (Xpos - queenArr[i]) / (queenIdx - i);
        if (
          Xpos === queenArr[i] ||
          gradient === 1.0 ||
          gradient === -1.0 ||
          gradient === 0.0
        )
          break;
        else count++;
      }
      if (count === queenIdx) {
        queenArr[queenIdx] = Xpos;
        if (queenIdx === queenN - 1) sum++;
        else recurQueen(queenArr, queenIdx + 1, queenN);
      }
    }
  }
};

const nQueen = () => {
  let input = parseInt(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );
  let arr = Array(input);
  if (input === 1) sum = 1;
  else recurQueen(arr, 0, input);
  console.log(sum);
};

nQueen();
