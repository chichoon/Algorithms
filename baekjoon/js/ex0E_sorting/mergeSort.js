let arr = [1, 4, 5, 6, 9, 2, 7, 3];

const merge = (start, end) => {
  let mid = parseInt((start + end) / 2);
  let arrTmp = Array.from({ length: arr.length }, (v) => 0);
  let i = start;
  let j = mid;
  for (let k = start; k < end; k++) {
    if (i === mid) arrTmp[k] = arr[j++];
    else if (j === end) arrTmp[k] = arr[i++];
    else if (arr[i] < arr[j]) arrTmp[k] = arr[i++];
    else arrTmp[k] = arr[j++];
  }
  for (let k = start; k < end; k++) arr[k] = arrTmp[k];
};

const mergeSort = (start, end) => {
  if (start + 1 === end) return;
  let mid = parseInt((start + end) / 2);
  mergeSort(start, mid);
  mergeSort(mid, end);
  merge(start, end);
};

mergeSort(0, arr.length);
console.log(arr.join(" "));
