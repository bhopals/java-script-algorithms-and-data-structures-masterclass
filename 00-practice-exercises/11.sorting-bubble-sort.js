function bubbleSortFromBegin(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("bubbleSortFromBegin - i", i);
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSortFromBegin([34, 14, 5, 1]));
console.log("=========");
function bubbleSortFromEnd(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    console.log("bubbleSortFromEnd - i", i);
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSortFromEnd([6, 4, 15, 10]));
