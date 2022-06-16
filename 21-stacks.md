### Stacks

- OBJECTIVES

  - Define what a stack is
  - Understand use cases for a stack
  - Implement operations on a stack data structure

#### Intro to Stacks

- WHAT IS A STACK?

  - It is an abstract data collection.
  - A LIFO (Last In First Out) data structure
  - The last element added to the stack will be the first element removed from the stack.å

- HOW IS IT USED?

  - Think about a stack of plates, or a stack of markers, or a stack of ... anything.
  - AS you pile it up, the last thing (or the topmost thing) is what gets removed first.
  - You could use LinkedList to implement it (But there are other ways as well)

  - Javascript Call Stack (when we run recursion code), we have seen how stacks are added in callstack (LIFO)

- WHERE STACKS ARE USED

  - Managing function invocations
  - Undo / Redo Commands (CTRL + Z / CTRL + Y)
  - Routing (the history object) is treated like a stack!

- There is more than one way of implmentating a stack

- STACK IMPLEMENTATION
  - ARRAY (Not Efficient)
  - LINKED LIST (Recommended)

#### Creating a Stack with an Array

Example:

```
let stack = [];

// Add elements at the end in a Stack
stack.push('google');
stack.push('instagram');
stack.push('youtube');
console.log(stack) // ["google", "instagram", "youtube"]

// Remove elements from the end in a Stack
stack.pop();
stack.pop();
stack.pop();
console.log(stack) // []

// Insert at the beginning
stack.unshift('google');

// Remove at the beginning
stack.shift('google');

```

- In array, adding at the begining and removing at the begining is not performant/efficient as any addition
  or deletion from the beginning requires a REINDEXING of the whole array.

- That is the reason, ARRAY is not recommended for STACK Implementation.
- The stack just requires Last In and Last Out capability - Add and remove at the END
  and that is the reason LINKED LIST Implementation is recommended

#### Writing our own Stack From Scratch

- Linked List Implementation

- We cannot use existing Linked List `push` and `pop` methods, because `pop`
  is not CONSTANT TIME (we need to traverse all the way from HEAD to TAIL)

- IMPLEMENTATION Details

  ```
  class Node {
      constructor(value) {
          this.value = value;
          this.next = null;
      }
  }

  ```

  ```
  class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push() {}
    pop() {}
  }
  ```

#### Push Method

- PUSHING

  - Add a value to the top of the stack!

- PUSING Pseudocode

  - The function should accept a value.
  - Create a new node with that value;
  - If there are no nodes in the stack, set the FIRST and LAST property to be the newly created node.
  - If there is at least one node, create a variable that stores the current FIRST property on the stack
  - Reset the FIRST property to be the newly created node
  - Set the NEXT property on the node to be the previously created variable
  - Increament the size of the stack by 1
  - Return the stack size

- PUSHING Code

  ```
  push(value) {
      const element = new Node(value);
      if (this.size === 0) {
          this.first = element;
          this.last = element;
      } else {
          var temp = this.first;
          this.first = element;
          this.first.next = temp;
      }
      return ++this.size;
  }
  ```

#### Pop Method

- POPPING

  - REMOVE a value to the top of the stack!

- POP Pseudocode

  - If there are no nodes in the stack return null
  - Create a temporary variable to store the FIRST property on the stack
  - If there is only 1 node, set the FIRST and LAST property to be null
  - If there is more than one node, set the FIRST property to be the NEXT property on the current FIRST
  - Decrement the size by 1
  - Retrun the value of the node removed

- POP Code

```
pop() {
    if (this.size === 0) return null;
    const element = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }

    this.size--;
    return element.value;
  }
```

#### Big O Stack

- TIME COMPLEXITY
  - INSERTION - `O(1)`
  - REMOVAL - `O(1)`
  - SEARCHING - `O(N)`
  - ACCESS - `O(N)`

#### RECAP

- Stack are a LIFO data structure where the last value in is always the first one out.
- Stacks are used to handle function invocations (the call stack), for opertaions like UNDO/REDO,
  for routing (remember pages you have visited and go back/forward) and much more!
- Stacks are not a build in data structure in JavaScript, but are relatively simple to implement.

#### DEMO

const stack = new Stack(); // first = null, last = null

stack.push(1) // [1] first = 1, first.next = null, last = 1
stack.push(2) // [1,2] first = 2, fist.next = 1, first.next.next = null, last = 1
stack.push(3) // [1,2,3] first = 3, first.next = 2, first.next.next= 1, first.next.nex.next= null, last = 1
stack.push(4) // [1,2,3,4] first = 4, fist.next = 3, first.next.next = 2, first.next.next.next= 1, last = 1

console.log(stack) // first = 4, fist.next = 3, first.next.next = 2, first.next.next.next= 1, last = 1

stack.pop() // 4 first = 3, first.next = 2, first.next.next= 1, first.next.nex.next= null, last = 1
stack.pop() // 3 first = 2, fist.next = 1, first.next.next = null, last = 1
stack.pop() // 2 first = 1, first.next = null, last = 1
stack.pop() // 1 first = null, last = null
stack.pop() // null first = null, last = null

- REMEMBER that in STACK, the FIRST will be end of the stack from the Items come in and go out.
- The LAST will always point to the very first inserted item
