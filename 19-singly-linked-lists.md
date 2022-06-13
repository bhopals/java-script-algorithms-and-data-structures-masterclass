### Singly Linked List

- OBJECTIVES

  - Define what a Singly Linked List is
  - Compare and contrast Linked Lists with Arrays
  - Implement insertion, removal and traversal methods on Singly Linked List

- WHAT IS A LINKED LIST??

  - Ordered list of elements
  - A data structure that contains a HEAD, TAIL, and LENGTH property
  - Linked Lists consist of NODES, and each NODE has a VALUE and a POINTER to another node or NULL
  - The each element in the Linked List is called a NODE, that has VALUE and REFEReNCE of
    the next node (NULL if its last NODE)
  - In other words, A Linked List is a bunch of NODES pointing to other nodes.
  - It does not have any indexes like ARRAYs

- COMPARISONS WITH ARRAYS

  - LINKED LISTS

    - Do not have INDEXES!
    - Connected via NODES with a NEXT Pointer
    - Randow Acess is not allowed

  - ARRAYS
    - Indexed in order!
    - Insertion and Deletion can be expensive (As everything needs to be reindexed)
    - Can quickly be accessed at a specific index

#### Linked List Node

```
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

#### Singly Linked List Push Method

- PUSHING

  - Adding a new node to the end of the LINKED LIST!

- PUSING Pseudocode

  - This function should accept a value
  - Create a new node using the value passed to the function
  - If there is no `HEAD` property on the list, set the head and tail to be the newly created node.
    (HEAD==TAIL - The First Element)
  - Otherwise set the `NEXT` property on the `TAIL` to be the new `NODE` and set the `TAIL` property on the list to be
    the newly created node.
  - Increment the `LENGTH` by 1
  - Return the Linked List

- Detailed PSUEDOCODE - PUSH Method

  - Create a new Node - `newNode` using the value.
  - If HEAD === null, set the HEAD = `newNode`, set the tail = HEAD
  - Else set the next of TAIL to newNode (tail.next = `newNode`), set the TAIL to newNode (tail = `newNode`)
  - Increment the length by 1 (length++)
  - return `this`

  ```
   push(val) {
     const newNode = new Node(val);
     if (this.head == null) {
       this.head = newNode;
       this.tail = this.head;
     } else {
       this.tail.next = newNode;
       this.tail = newNode;
     }
     this.length++;
     return this;
   }
  ```

#### Singly Linked Listy Pop Method

- POPPING

  - Removing a NODE from the end of the LINKED List!

- Keep that in mind, to remove it, we have to assign a new TAIL and that involves going all the way through the
  list from the beginning because we do not have a backward pointer. We can't just take the tail and say, give me the one before this

- Popping Pseudocode

  - If there are no nodes in the list, return undefined
  - Loop through the list until your reach the tail (make sure keep track of PRE node)
  - Set the NEXT property of the 2nd to last node to be null (PRE node)
  - Set the TAIL to be the 2nd to last node (PRE node)
  - Decrement the length of the list by 1
  - Return the value of the node removed

- DETAILED POP Pseudocode

  - If `HEAD == null`, return `undefined`
  - Else

    - create `current` and `prevNode` variable
    - WHILE (current.next) - set `prevNode` to `current`, and `current` to `current.next`
    - set `tail` to `current`, and `tail.next` to `null`
    - set `length--`
    - (special case - if length 0, set `head` and `tail` to `null`)
    - return `current` - the item that has been popped out/ removed

    ```
    pop() {
      if (!this.head) return;
      else {
        let current = this.head;
        let newTail = current;
        while (current.next) {
          newTail = current;
          current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //work around - for now
        if (this.length === 0) {
          this.head = this.tail = null;
        }
        return current;
      }
    }
    ```

#### Shifting (Remove a Node from Beginning)

- Removing a new node from the beginning of the Linked List

- SHIFTING Pseudocode

  - If there are no NODES, return undefined
  - Store the current HEAD property in a `temp` variable
  - Set the HEAD property to be the current HEAD's next property
  - Decrement the length by 1
  - Return the value of the node removed

- DETAILED SHIFT Pseudocode

  - If `!this.head` return `undefined`
  - Assign `head` into `temp` variable (`let currentHead = this.head`)
  - Update the `head` to next element (this.head = currentHead.next)
  - Decrement the length by 1 (`this.length--;`)
  - OPTINALLY - check if the length is ZERO, reset both HEAD and TAIL to null
    - `this.length === 0 ? this.tail = this.head = null; ''`

  ```
  shift() {
      if (!this.head) return undefined;
      const currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      //work around - for now
      if (this.length === 0) {
        this.head = this.tail = null;
      }
      return node;
  }
  ```

#### Unshifting (Adding a new Node to the Beginning)

- Adding a new Node to the beginning of the Linked List

- UNSHIFTING Pseudocode

  - This function should accept a value
  - Create a new node using the value passed to the function
  - If there is no head property on the list, set the head and tail to the newly created node
  - Otherwise, set the newly created node's NEXT property to be the current HEAD property on the list
  - Set the HEAD property to the list to be that newly created node
  - Increment the length by 1
  - Return the Linked List

- DETAILED UNSHIFTING Pseudocode

  - Create a new Node (`let newNode = new Node(val);`)
  - If Linked List is Empty (`!this.head == null`), set Head and Tail to the newNode (`this.head = this.tail = newNode;`)
  - Else set newNode NEXT to current HEAD (`newNode.next = this.head`), and Update the HEAD to newNode (`this.head = newNode`)
  - Increment the length by 1 (`this.length++;`)
  - Return Linked List (`return this;`)

  ```
    unshift(val) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  ```

#### Get

- Retrieving a node by it's position in the Linked List

- GET Pseudocode

  - The function should accept an Index
  - If the Index is less than ZERO or greater than or equal to the lenght of the list, return NULL (Index out of bound case)
  - Loop through the list until you reach the index and return the node at that specific index (use a COUNTER Variable)
  - Return the Item on the matched index

- DETAILED GET Pseudocode

  - Check Index out of bound case (`if (index < 0 || index >= this.length) return null;`)
  - Init a counter to 0 (`let counter = 0;`)
  - Create a variable to hold current (`let current = this.head;`)
  - Iterate over till counter !== index (`while (counter !== index)`)
    - For each iteration, Increment the counter, and Set the current to next ( `counter++; current = current.next;`)
  - Once Iteration finishes, return current (`return current`)

  ```
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  ```

#### Set

- Changing the value of a node based on it's position in the Linked List

- SET Pseudocode

  - Use your `get` function to find the specific node.
  - If the NODE is not found, return FALSE
  - If the NODE is found, the value of that node to be the value passed to the function and return TRUE;

- DETAILED SET Pseudocode

  - Create a function `set` that accept `index` and `val` - `set(index, newVal){...}`
  - Call `get` to get the element
  - If `get` returns the element, update the element.val to newVal, and return `true`
    - `if (foundNode) { foundNode.val = val;return true;}`
  - Else return `false` (`return false;`)

  ```
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  ```

#### Singly Linked List: Insert

- Adding a node to the Linked List at a specific position

- INSERT Pseudocode

  - If the INDEX is less than zero or greater than the length, return false (Index out of bound case)
  - If the INDEX is the same as the length, push a new node to the end of the list.
  - If the INDEXD is zero, unshift a new node to the start of the list.
  - Otherwise, using the `get` method, access the node at the index-1 (if INSERT at 6th, then grab 5th Index)
  - Set the next property on that node to be the new node
  - Set the next property on the new node to be the previous next
  - Increment the length
  - return true

- INSERT Code Example
  ```
  insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) !!this.push(val);
      if (index === 0) return !!this.unshift(val); // A way to convert `this` or other return to boolean - coersion
      let prevNode = this.get(index - 1);
      let newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  ```

#### Singly Linked List: Remove

- Removing a node from the Linked List at a specific position

- Remove Pseudocode

  - If the index is less than ZERO or Greater than the length, return undefined
  - If the index is the same as the lenght-1, POP (remove at the end)
  - If the index is 0, shift (remove from start)
  - Otherwise using the `get` method, access the node at the index-1
  - Set the next property on that node to be the next of the next node
  - Decrement the length
  - Return the valie of the node removed

- Code Example

  ```
  remove(index) {
      if (index < 0 || index >= this.length) return false;
      if (index === this.length - 1) return this.pop();
      if (index === 0) return this.shift();
      const prevNode = this.get(index - 1);
      const removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return removed;
    }
  ```

#### Singly Linked: reverse

- Reversing the Linked List in place! (Without making a copy/temp) - Traverse and Reverse method
- Example
  (HEAD) 13 => 27 => 32 => 71 (TAIL)
  TO
  (TAIL) 13 <= 27 <= 32 <= 71 (HEAD)

- REVERSE Pseudocode

  - Swap the HEAD and TAIL
  - Create a variable called NEXT
  - Create a variable called PREV
  - Create a variable called NODE and initialize it to the HEAD Property
  - Loop through the list
  - Set NEXT property on the NODE to be whatever PREV is
  - Set PREV to be the value of the NODE variable
  - Set the NODE variable to be the value of the next variable

- Code Example

  ```
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  ```

##### Visualization

- REFERENCE - https://visualgo.net/en/list?slide=1
