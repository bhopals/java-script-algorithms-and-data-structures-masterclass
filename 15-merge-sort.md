### Merge Sort

- OBJECTIVES

  - Understand the limitations of the Sorting Algorithms we have learned so far (Bubble, Sort, Insert Algo.)
  - Implement MERGE SORT
  - Implement QUICK SORT
  - Implement RADIX SORT

- FASTER SORTS

  - BUBBLE/INSERT/SELECTION Sort ==> MERGE/QUICK/RADIX Sort
  - There is a family of Sorting Algorithms that can improve time complexity from `O(n2)` to `O(n log n)`

- WHY LEARN THIS?

  - The sorting Algorithms we have learned so far DO NOT Scale well. They actually work
    well for 20 items input, but as the input grows, the performance degrades.
  - There is a tradeoff bwtween efficiency and simplicity.
  - The more efficient algorithms are much less simple, and generally take longer to understand.

  - For example, try out BUBBLE SORT on an array of 100,000 elements, it will take quite some time!

  ```
  let data = Array.apply(null, { length: 100000}).map(Function.call, Math.random);
  bubbleSort(data) // Too Slow
  mergeSort(data) // Faster
  ```

#### Merge Sort: Introduction

- MERGE SORT

  - It is a combination of TWO THINGS - MERGING and SORTING.
  - Exploits the fact that arrays of 0 or 1 elements are always sorted.
  - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly
    sorted array.

  - HOW DOES IT WORK?

    - We SPLIT the array into smallest unit (1 element array)
    - [8,3,5,4,7,6,1,2]
    - [8,3,5,4] [7,6,1,2]
    - [8,3] [5,4] [7,6] [1,2]
    - [8] [3] [5] [4] [7] [6] [1] [2] - Split to this level
    - Now we start the MERGE Process
    - [3,8] [4,5] [6,7] [1,2]
    - [3,4,5,8] [1,2,6,7]
    - [1,2,3,4,5,6,7,8]

#### Merging Arrays Intro

- Merge Sorted Arrays Logic

- MERGING ARRAYS

  - In order to implement merge sort, it is useful to first implement a function responsible
    for merging two sorted arrays.
  - Given two arrays which are sorted, this helper function should create a new array which is also sorted,
    and consists of all the elements in the two input arrays.
  - This function should run in `O(n+m)` TIME and `O(n+m)` SPACE and SHOULD NOT modify the params passed to it.
    - Here `n` is the size of the first array
    - Here `m` is the size of the second array

- MERGING ARRAYS Pseudocode
  - Create an Empty Array - RESULT ARRAY, take a look at the SMALLEST values in each input array
  - While there are still values we have not looked at...
    - If the value in the First Array is SMALLER than the value in the SECOND ARRAY, PUSH the value
      in the FIRST ARRAY intor your RESULTS and move on the the NEXT value in the FIRST ARRAY.
    - If the value in the First Array is LARGER than the value in the SECOND ARRAY, PUSH the value
      in the SECOND ARRAY intor your RESULTS and move on the the NEXT value in the SECOND ARRAY.
    - Once we exhaust one ARRAY, push in all the remaining values from the OTHER ARRAY.
