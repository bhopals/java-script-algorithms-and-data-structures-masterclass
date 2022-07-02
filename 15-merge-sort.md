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
