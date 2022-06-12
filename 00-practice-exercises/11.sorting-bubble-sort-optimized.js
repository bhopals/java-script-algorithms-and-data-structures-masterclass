function bubbleSortFromEndBeforeOptimize(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    console.log("bubbleSortFromEnd - i", i);
    for (var j = 0; j < i - 1; j++) {
      console.log("inner - j:", i);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSortFromEndBeforeOptimize([8, 1, 2, 3, 4, 5, 6, 7]));
console.log("============================================================");

function bubbleSortFromEndAfterOptimize(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    console.log("bubbleSortFromEnd - i", i);
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log("inner - j:", i);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSortFromEndAfterOptimize([8, 1, 2, 3, 4, 5, 6, 7]));
