function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

function selectionSort(arr) {
  const swap = (arr, i, min) => ([arr[i], arr[min]] = [arr[min], arr[i]]);
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
}

console.log(selectionSort([4, 3, 55, 1, 7, 8, 20, 2, 7, 8, 9, 0, 5]));
