const pow10 = [1, 10, 100];
const getDigit = (num, digit) => {
  return Math.floor(num / pow10[digit]) % 10;
};

const radixSort = () => {
  let arr = [012, 421, 046, 674, 103, 502, 007, 100, 021, 545];
  for (let i = 0; i < 3; i++) {
    let radixArr = Array.from({ length: 10 }, (v) => []);
    for (let j = 0; j < 10; j++) {
      radixArr[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [];
    for (let j = 0; j < 10; j++) arr = [...arr, ...radixArr[j]];
  }
  console.log(arr);
};

radixSort();
