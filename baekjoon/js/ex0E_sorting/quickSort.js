const swap = (arr, idx1, idx2) => {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
};

const recurQuick = (arr, startIdx, endIdx) => {
  if (endIdx <= startIdx + 1) return;
  let pivotIdx = startIdx,
    leftIdx = startIdx + 1,
    rightIdx = endIdx - 1;
  while (true) {
    while (leftIdx <= rightIdx && arr[pivotIdx] >= arr[leftIdx]) leftIdx++;
    while (leftIdx <= rightIdx && arr[pivotIdx] <= arr[rightIdx]) rightIdx--;
    if (leftIdx > rightIdx) break;
    swap(arr, rightIdx, leftIdx);
  }
  swap(arr, rightIdx, pivotIdx);
  recurQuick(arr, startIdx, rightIdx);
  recurQuick(arr, rightIdx + 1, endIdx);
};

const quickSort = () => {
  let arr = [6, -8, 1, 12, 8, 3, 7, -7]; //size: 8
  recurQuick(arr, 0, 8);
  console.log(arr); //[3, -8, 1, -7, 6, 8, 7, 12]
};

quickSort();
