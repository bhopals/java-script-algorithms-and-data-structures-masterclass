### Selection Sort

- Similar to Bubble Sort, but instead of first placing LARGE values into sorted position, it places SMALL
  values into sorted position
- We are still moving from beginning to the end, but the actual sorted data is accumulating at the beginning.
- Visual Animation of Sorting process - https://www.toptal.com/developers/sorting-algorithms

- Basically

  - BUBBLE SORT - Start from the END, Iterate over, Find the Max, Put that at the END
  - SELECTION SORT - Start from the Begin, Iterate over, Find the MIN, Put at the BEGIN

- SELECTION SORT Pseudocode

  - Store the First Element as the smallest value you have seen so far.
  - Compare this item to the next item in the array until you find a smaller number.
  - If a SMALLER number is found, designate the smaller number to be the new `minimum` and
    continue until the end of the array.
  - If the `minimum` is not the value (index) you initially began with, swap the two values.
  - Repeat this with the next element until the ARRAY is sorted.

- EXAMPLE

```
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
```

#### Selection Sort: big O Complexity

- Time complexity O(N^2)

- Now, where selection sort is better than something like Bubble Sort, really is there in one scenario,
  which is if for some reason or you are in a situation where you want to minimize the number of SWAPS
  that you are making.
- If you remember, in bubble sort, you are actually Swapping over and over again to get the largest item to the END.
  We keep swapping and swapping until it goes to the end.

- On the other hand, In SELECTION SORT, we iterate, we compare a lot, but we only make one SWAP at the end of EACH LOOP.
  So if for some reason we are worried about writing to MEMORY, we are worried about actually doing the SWAP,
  then SELECTION SORT is better, Otherwise this is not good :(
