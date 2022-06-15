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
