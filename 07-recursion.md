### Recursion

### Recursion Story - Martin and The Dragon

- Martin goes and ask the Dragon which numbers in the list are ODD
- Dragon was not in a good mood so he said - I will only tell if the first number in the list is ODD or not.
- Martin thought for a while and asked, is the first number in the list is ODD. Dragon sain NO.
- Martin again removed that item from the list and asked again, is the first number in the list is ODD. Dragon sain NO.
- Martin again removed that item from the list and asked again, is the first number in the list is ODD. Dragon sain NO.
- Martin again removed that item from the list and asked again, is the first number in the list is ODD. Dragon sain NO.
- Martin again removed that item from the list and asked again, is the first number in the list is ODD. Dragon sain NO.
- And so on till the whole list is empty
- And at the last, Martin showed and EMPTY list to dragon, and Dragon Furiously said, you MORON! the list is EMPTY! (Break the Loop)

- Congratulation, you discovered RECURSION!

#### OBJECTIVES

- Define what recursion is and how it can be used.
- Understand the two essential components of a recursive function.
- Visualize the Call Stack to better debug and understand recursive functions.
- Use helper method recursion to solve more difficult problems

#### Why Use Recursion

- WHAT IS RECURSION

  - A PROCESS (A function in our case) that CALLS ITSELF.

- Recurstion is EVERYWHERE

  - JSON.parse / JSON.stringify
  - document.getElementById and DOM traversal
  - Object traversal
  - Being used in more complex data structures (Graph)
  - It is sometimes a Cleaner alternative to iteration

#### The Call Stack

- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
- In Javascript, it is named the `call stack`

- THE CALL STACK

  - Any time the function is invoked, it is placed (`pushed`) on the top of the call stack
  - When javascript sees the `return` keyword or when the function ends, the compiler will remove (`pop`)

#### Our First recursive Function

- For any recursive function, there are `TWO` things that must present.

  - Invoke the `same`(1) function with a different input until you reach your `base`(2) case!

- Base Case (Stopping Point)

  - The condition when the recursion ends.
  - This is the MOST IMPORTANT concept to understand.

- TWO Essential parts of a recursive function!

  - 1. BASE CASE
  - 2. DIFFERENT INPUT

- EXAMPLE

  ```
   function countDown(num) {
       if(num<=0) { //BASE CASE
           console.log('ALL Done');
           return;
       }
       console.log(num);
       num--;
       countDown(num);//DIFFERENT INPUT  (num--)
   }
   countDown(5)
  ```

#### Our second recursive function

- EXAMPLE
  ```
    function sumRange(num) {
        if(num === 1)  return 1; //BASE CASE
        return num + sumRange(num-1) // DIFFERENT INPUT (num - 1)
    }
    sumRange(5)
  ```

#### Writing Factorial Iteratively

```
    function factorial(number) {
        total = 1;
        for (let index = number; index > 1; index--) {
            total*=index;
        }
        return total;
    }

    factorial(5)

```

### Writing Factorial Recursively

```
    function factorial(number) {
        if(number == 1) return 1;
        return number * factorial(number-1);
    }
    factorial(5)

```

#### Where things go wrong (Common Pitfalls)

- No Base case (OR Incorrect/Invalid Base case)
- Forgetting to return (From Base Case and At the end of Factorial) or returning the wrong thing!
- Importance of returning from BASE case is crucial otherwise you end up getting Max Call stack size exceeded.
- Avoid Stack Overflow!

- EXAMPLE 1 - Stack overflow error because Same input is being passed - Should be DIFFERENT INPUT

  ```
    function factorial(number) {
        if(number == 1) return 1;
        return number * factorial(number);
    }
  ```

- EXAMPLE 2 - Stack overflow error because BASE Case is not returning anything (Just console.log(1))

```
  function factorial(number) {
      if(number == 1) console.log(1);
      return number * factorial(number-1);
  }
```

- RECURSION MEANS TWO THINGS to keep in MIND

  - BASE CASE (With valid return)
  - DIFFERENT INPUT when making recursive call

#### Helper Method Recursion (Design Pattern)

- Usually we create a INNER method to perform any action recursively in any function context.
- This design pattern is quite Popular

- So Helper Method Recursion, It is Just a Pattern where we have an OUTER Function (`collectOdds`) that is not RECURSIVE
  which calls an INNER Function (`helper`), which is recursive

```
function collectOdds(arr) {
  const result = [];

  function helper(elements) {
    if (elements.length == 0) return;
    if (elements[0] % 2 !== 0) {
      result.push(elements[0]);
    }
    helper(elements.slice(1));
  }
  helper(arr);
  return result;
}

collectOdds([1, 2, 3, 4, 5, 6, 7]);
```

#### Pure Recursion

- KEYWORDS
  - Lots of students approach Recursion with bit of Apprehension.
  - It's somewhat initmidating
  - Really take and absorb the content
