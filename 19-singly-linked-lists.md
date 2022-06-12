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

- DETAILED Pseudocode
  - If `HEAD == null`, return `undefined`
  - Else
    - create `current` and `prevNode` variable
    - WHILE (current.next) - set `prevNode` to `current`, and `current` to `current.next`
    - set `tail` to `current`, and `tail.next` to `null`
    - set `length--`
    - (special case - if length 0, set `head` and `tail` to `null`)
    - return `current` - the item that has been popped out/ removed

##### Visualization

- REFERENCE - https://visualgo.net/en/list?slide=1
