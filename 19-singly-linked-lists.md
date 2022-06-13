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

##### Visualization

- REFERENCE - https://visualgo.net/en/list?slide=1
