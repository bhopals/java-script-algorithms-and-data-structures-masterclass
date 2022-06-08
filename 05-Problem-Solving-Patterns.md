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

- FREQUENCY COUNTER - ANAGRAM CHALLANGE

  - QUESTION

    - Given two strings, write a function to determine if the second string is an anagram of the first.
      An anagram is a word, phrase, or name formed by rearranging the letters of another,
      such as `cinema` formed from `iceman`

    ```
     validAnagram('', '') // true
     validAnagram('aaz', 'zza') // false
     validAnagram('anagram', 'nagaram') // true
     validAnagram('rat', 'car') // false
     validAnagram('awesome', 'awesom') // false
     validAnagram('qwerty', 'qeywrt') // true
     validAnagram('texttwisttime', 'texttwisttext') // true
    ```

  - ANSWERS

  ```
  function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let frequencyCounterString1 = {};
    let frequencyCounterString2 = {};

    for (let str of string1.split("")) {
        frequencyCounterString1[str] = (frequencyCounterString1[str] || 0) + 1;
    }

    for (let str of string2.split("")) {
        frequencyCounterString2[str] = (frequencyCounterString2[str] || 0) + 1;
    }
    console.log("frequencyCounterString1>", frequencyCounterString1);
    console.log("frequencyCounterString2>", frequencyCounterString2);
    for (let key in frequencyCounterString1) {
        if (frequencyCounterString1[key] !== frequencyCounterString2[key]) {
        return false;
        }
    }
    return true;
   }
    console.log(validAnagram("", ""), true); // true
    console.log(validAnagram("aaz", "zza"), false); // false
    console.log(validAnagram("anagram", "nagaram"), true); // true
    console.log(validAnagram("rat", "car"), false); // false
    console.log(validAnagram("awesome", "awesom"), false); // false
    console.log(validAnagram("qwerty", "qeywrt"), true); // true
    console.log(validAnagram("texttwisttime", "timetwisttext"), true); // true
  ```

  - Note - String can be accessed using INDEX as well. So instead of using `str.split()`,
    I could have simply use

    ```
    for(let i=0; i < str1.length; i++) {
        let str = str1[i]
    }
    ```
