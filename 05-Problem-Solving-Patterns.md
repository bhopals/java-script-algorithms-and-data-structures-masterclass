### How Do You Improve?

- 1. `Device` a Plan for Solving Problems (Refer Section - 04-Problem-Solving-Approach.md)
- 2. `Master` Common Problme solving patterns (This Section)

- SOME PATTERNS
  - Frequency Counter Pattern
  - Multiple Pointers
  - Sliding Window
  - Divide and Conquer
  - Dynamic Programming
  - Greedy Algorithms
  - Backtracking
  - etc...

#### Frequency Counter Patterns

- This pattern uses objects or sets to collect values/frequencies of values - O(N) times
- This can often avoid the need for nested loops or O(N^2) operations with ARRAY or STRINGS

- AN EXAMPLE
- QUESTION

  - Write a function called `same`, which accepts two arrays. The function should return true if every value in the
    array has it's correcponding values squared in the second array. The frequency of values must be the same.

    ```
    same([1,2,3], [4, 1, 9]) // true
    same([1,2,3], [1, 9]) // false
    same([1,2,1], [4, 4, 1]) // false (must be same frequency)
    ```

- ANSWER

  - SOLUTION 1 (NAIVE SOLUTION) - Time complexity O(N^2)

    ```
    // [1,2,3], [2,4,9]
    function same(arr1, arr2) {
      if (arr1.length != arr2.length) {
        return false;
      }
      for (var i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i] * 2);
        if (index == -1) {
        return false;
        }
        arr2.splice(index, 1);
      }
      return true;
    }
    ```

  - SOLUTION 2 (Using Frequency Counter Pattern) - Time complexity O(N)

  ```
  function same(arr1, arr2) {
   if (arr1.length != arr2.length) {
       return false;
   }
   let frequencyCounter1 = {};
   let frequencyCounter2 = {};
   for (let val of arr1) {
       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
   }
   for (let val of arr2) {
       frequencyCounter2[val] = (frequencyCounter1[val] || 0) + 1;
   }

   console.log("frequencyCounter1:", frequencyCounter1); // {1:1, 2:2, 3:1, 5:1}
   console.log("frequencyCounter2:", frequencyCounter2); // {1:1, 4:2, 9:1, 11:1}
   for (let key in frequencyCounter1) {
       // If there is any KEY in frequencyCounter2 with KEY*2
       if (!(key * 2 in frequencyCounter2)) {
       return false;
       }
       // If there is any value in frequencyCounter matches with frequencyCounter2
       if (frequencyCounter2[key * 2] !== frequencyCounter1[key]) {
       return false;
       }
       return true;
   }
   }
   same([1, 2, 3, 4, 5], [9, 1, 4, 4, 11]);`
  ```

- We usually use an Object to break down the frequency in KEY-VALEU Pair
