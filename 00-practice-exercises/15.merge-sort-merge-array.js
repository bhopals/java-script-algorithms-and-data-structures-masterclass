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

function mergeArrays(arr1, arr2) {
  let merged = [];
  while (arr1.length > 0 && arr2.length > 0)
    merged.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  merged.push(...arr1, ...arr2);
  return merged;
}

const mergedAr = mergeArrays([1, 10, 50], [2, 14, 99, 100, 200, 300, 400]); // [1, 2, 10, 14, 50, 99, 100, 200, 300, 400]
console.log(mergedAr);

const merged = merge([1, 10, 50], [2, 14, 99, 100, 200, 300, 400]); // [1, 2, 10, 14, 50, 99, 100, 200, 300, 400]
console.log(merged);
