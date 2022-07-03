function mergeArrays(arr1, arr2) {
  let merged = [];
  while (arr1.length > 0 && arr2.length > 0)
    merged.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  merged.push(...arr1, ...arr2);
  return merged;
}

const a1 = [1, 10, 50];
const a2 = [2, 14, 99, 100, 200, 300, 400];

const merged = mergeArrays(a1, a2); // [1, 2, 10, 14, 50, 99, 100, 200, 300, 400]
console.log(merged);
