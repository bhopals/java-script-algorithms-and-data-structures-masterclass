### Insertion Sort

- INSERTION SORT Sort is pretty similar to the BUBBLE SORT and to SELECTION SORT.
- INSERTION SORT builds up the SORT by gradually creating a larger left half which is always sorted.
- So instead of finding the LARGEST element at a time or finding the SMALLEST element at a time, it takes each
  element and places it where it should go in the SORTED half.

- That is the reason we call it INSERTION SORT as we are talking the one element at a time, and
  inserting it to the correct spot.
- EXAMPLE
  [`5`, 3, 4, 1, 2]
  [`3, 5`, 4, 1, 2]
  [`3, 4, 5`, 1, 2]
  [`1, 3, 4, 5`, 2]
  [`1, 2, 3, 4, 5`]

### Insertion Sort Pseudocode

- Start by picking the second element in the array.
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side)
  to place the element in the CORRECT order.
- Repeat until the array is SORTED.

- EXAMPLE

```
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([4, 3, 55, 1, 7, 8, 20, 2, 7, 8, 9, 0, 5]));

```

#### Insertion Sort Complexity

- Time Complexity - O(N^2) - Quadratic

#### Selection Sort Usage

- It is best if you have nearly sorted data
- If your data there is something called an ONLINE ALGORITHM, which is an algorithm that can work as data
  is coming in, as it receives new data. It doesn't have to have the entire ARRAY at once.
  That is because inserting sort is keeping one side sorted and it doesn't matter what the number is that comes in,
  we can place it where it needs to go.

- If you receive continous data and new elements requires to be sorted and placed at correct position
