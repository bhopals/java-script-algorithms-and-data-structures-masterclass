### QUEUES

- OBJECTIVES

  - Define what a Queue is
  - Understand use cases for a queue
  - Implement operations on a queue data structure

- WHAT IS A QUEUE?

  - A FIFO (First In First Out) data structure
  - Think of a Line/Forming a Queue - The First person In the First Person out.

- We have seen this before

  - Queues exist everywhere!
  - Think about the last time you waited in line...

- How do we use Queues in Programming
  - Background Tasks
  - Uploading Resources
  - Printing / Task Processing

#### Queue Class Implementation

```
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

```
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){}
    dequeue(){}
}
```

#### Creating Queues Using Arrays

- Implementation Details

- FIRST Approach

  - Use `PUSH` to insert at the end, and `SHIFT` to remove from the beginning
    ```
    const queue = [];
    queue.push("FIRST");
    queue.push("SECOND");
    queue.push("THIRD");
    queue.shift();//FIRST
    queue.shift();//SECOND
    queue.shift();//THIRD
    ```

- SECOND Approach

  - Use `UNSHIFT` to insert at the beginning, and `POP` to remove from the end

  ```
   const queue = [];
   queue.unshift("FIRST");
   queue.unshift("SECOND");
   queue.unshift("THIRD");

   queue.pop(); //FIRST
   queue.pop(); //SECOND
   queue.pop(); //THIRD

  ```

- This is not an efficient solution as remove from the beginning of the ARRAY requires re-indexing of the
  whole array - NOT RECOMMENDED

#### Enqueue - Add to the queue

- ENQUEUE

  - Adding to the queue

- ENQUEUE Pseudocode
  - The function accept the value
  - Create a new NODE using that value passed to the function
  - If there are no nodes in the queue, set this node to be the FIRST and LAST property of the queue
  - ELSE, set the NEXT property on the current LAST to be that Node, and then set the LAST
    property of the queue to be that NODE.
  - Increment the size of the queue by 1
  - Return the updated size of the queue
