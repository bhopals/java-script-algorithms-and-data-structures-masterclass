### Searching Algorithms

#### Objectives

- Describe what a searching algorithm is
- Implement LINEAR SEARCH on arrays
- Implement BINARY SEARCH on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

#### Intro to LINEAR SEARCH

- HOW DO WE SEARCH?

  - Given an array, the simplest way to search for an value is to look at every element in
    the array and check if it's the value we want.

- JAVASCRIPT HAS SEARCH!

  - There are many different search methods on arrays in Javascript:
    - indexOf
    - includes
    - find
    - findIndex
  - But how do these function works? ==> `LINEAR SEARCH`

- LINEAR SEARCH

  - Iterate over the list(Object/Array) sequencly
    or linearly until the matching element found.

- LINEAR SEARCH PSEUDOCODE (Example)

  - This function accepts an ARRAY and a VALUE
  - Loop through the array and check if the current array element is equal to the value.
  - If it is, return the index at which the element is found.
  - If the value is never found, return -1

- EXERCISE
  - QUESTION
    - Write a function called `linearSearch` which accepts an array and a value, and returns the index at
      which the value exists. If the value does not exist in the array, return -1.

```
function linearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) if (arr[i] === value) return i;
  return -1;
}

console.log(linearSearch([10,15,20,25,30], 15), 1)
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4), 5)
console.log(linearSearch([100], 100), 0)
console.log(linearSearch([1,2,3,4,5], 6), -1)
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 10), -1)
console.log(linearSearch([100], 200), -1)
```

#### Linear Search BIG O

- Time Complexity
  - Best Case - O(1)
  - Average Case - O(n)
  - Worst Case - O(n)

#### Intro to Binary Search

- Binary Search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- CAVEAT: Binary Search only works on Sorted Arrays
- It uses DIVIDE and CONQUER Mechanism

#### Binary Search PSEUDOCODE

- The function accepts SORTED Array and a Value
- Create a LEFT pointer at the START of the ARRAY
  and a RIGHT pointer at the END of the ARRAY
- WHILE (LOOP) the LEFT Pointer comes before the RIGHT Pointer
  - Create a pointer in the MIDDLE
  - If you find the value you want, return the INDEX
  - If the value is too SMALL, move the LEFT pointer UP
  - If the value is too LARGE, move the RIGHT pointer DOWN
- If you never find the value return -1

- EXAMPLE

```
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let midVal = arr[middle];
    if (midVal === value) {
      return middle;
    } else if (midVal < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2), 1);
console.log(binarySearch([1, 2, 3, 4, 5], 3), 2);
console.log(binarySearch([1, 2, 3, 4, 5], 5), 4);
console.log(binarySearch([1, 2, 3, 4, 5], 6), -1);

```
