function mergeArrays(arr1, arr2) {
  let merged = [];
  while (arr1.length > 0 && arr2.length > 0)
    merged.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  merged.push(...arr1, ...arr2);
  return merged;
}

function merge(arr1, arr2) {
  let results = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
}

function mergeSortA(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortA(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// const merged = merge([1, 10, 50], [2, 14, 99, 100, 200, 300, 400]);
let merged;
merged = mergeSort([14, 300, 50, 400, 1, 200, 100, 10, 2, 99]);
console.log(merged); // [1, 2, 10, 14, 50, 99, 100, 200, 300, 400]

merged = mergeSortA([10, 24, 76, 73, 72, 1, 9]);
console.log(merged); // [1, 9, 10, 24, 72, 73, 76]
