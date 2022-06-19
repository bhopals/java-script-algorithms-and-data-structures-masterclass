### Tree Traversal

- OBJECTIVES

#### Intro To Tree Traversal

- Given any tree, this Traversal Algo will be used

- For Example

  - Traverse the tree to VISIT EVERY NODE ONCE

- TRAVERSING A TREE - TWO WAYS

  - Breadth-first SEARCH (BFS)
    - Going across the tree - Right to Left starting from the top
  - Depth-first SEARCH (DFS)
    - Vertical Traversing - Top to Bottom till the end of the Node recursively all the way to the RIGHT
    - 3 Main Orders in DFS - InOrder, PreOrder, PostOrder

#### Breadth First Search Intro

- It means we want to visit every sibling node at the same level before we look at child
- We traverse from LEFT to RIGHT at the same level (Means Working HORIZENTALLY)

- Example: The order would be [10, 6, 15, 3, 8, 20]

```
      10
   6       15
3    8         20

```

- BREADTH FIRST SEARCH (BFS) Pseudocode (Steps - Iteratively)

  - Create a QUEUE (this can be ARRAY), and a variable [] to store the values of nodes visited.
  - Place the root node in the Queue
  - Loop as long as there is anything in the Queue
    - Dequeue a node from the queue and push the value of the node into the variable
      that stores the nodes.
    - If there is a LEFT property on the node dequeued - add it to the queue
    - If there is a RIGHT property on the node dequeued - add it to the queue
  - Return the variable that stores the values

- BREADTH FIRST SEARCH (BFS) Code

  ```
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  ```

#### DEPTH FIRST SEARCH (DFS)

- In DFS, we traverse node VERTICALLY(Top to Bottom), before visiting Sibling Nodes

- There are 3 Different orders in which we are going to talk about DFS

  - PreOrder - [10, 6, 3, 8, 15, 20]
  - PostOrder - [3, 8, 6, 20, 15, 10]
  - InOrder - [3, 6, 8, 10, 15, 20]

  ```
          10
      6         15
  3      8          20
  ```

#### Depth First PreOrder

- PreOrder - [10, 6, 3, 8, 15, 20]

- PreOrder - Visit the NODE ==> Visit the ENTIRE LEFT ==> VISIT THE ENTIRE RIGHT

- In PreOrder, We visit the Node fist, then we look at the entire LEFT side, then we traverse the RIGHT

- DEPTH FIRST SEARCH PreOrder Pseudocode (Steps Recursively Only - Cannot be done Iteratively)

  - Create a variable [] to store the values of the nodes visited
  - Store the root of the BST in a vaiable called CURRENT
  - Write a HELPER function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the node has a left property, call the helper function with the left property of the node
    - If the node has a right property, call the helper function with the right property of the node
  - Invoke the helper function with the current value
  - Return variable array []

- DEPTH FIRST SEARCH (DFS) PreOrder Code

```
 DFSPreOrder() {
   let data = [];
   function traverse(node) {
     data.push(node.value);
     if (node.left) traverse(node.left);
     if (node.right) traverse(node.right);
   }
   traverse(this.root);
   return data;
 }
```

#### Depth First PostOrder

- PostOrder - [3, 8, 6, 20, 15, 10]
- PostOrder - Visit the ENTIRE LEFT ==> Visit the ENTIRE RIGHT ==> VISIT THE NODE

- DEPTH FIRST SEARCH PostOrder Pseudocode (Steps Recursively Only - Cannot be done Iteratively)

  - Create a variable [] to store the values of the nodes visited
  - Store the root of the BST in a vaiable called CURRENT
  - Write a HELPER function which accepts a node
    - If the node has a left property, call the helper function with the left property of the node
    - If the node has a right property, call the helper function with the right property of the node
    - Push the value of the node to the variable that stores the values
  - Invoke the helper function with the current value
  - Return variable array []

- DEPTH FIRST SEARCH (DFS) PreOrder Code

```
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
```

#### Depth First InOrder

- InOrder - [3, 6, 8, 10, 15, 20]
- InOrder - Visit the ENTIRE LEFT ==> VISIT THE NODE ==> Visit the ENTIRE RIGHT

- DEPTH FIRST SEARCH InOrder Pseudocode (Steps Recursively Only - Cannot be done Iteratively)

  - Create a variable [] to store the values of the nodes visited
  - Store the root of the BST in a vaiable called CURRENT
  - Write a HELPER function which accepts a node
    - If the node has a left property, call the helper function with the left property of the node
    - Push the valie of the node to the variable that stores the values
    - If the node has a right property, call the helper function with the right property of the node
  - Invoke the helper function with the current value
  - Return variable array []

- DEPTH FIRST SEARCH (DFS) PreOrder Code

```
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  // Replace IF with && condition
  DFSInOrder_() {
    let data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
```

#### When to Use BFS and DFS

- BFS and DFS - Which one is better?

- If the Tree is huge - Lots of nodes to keep track of. In that case, the SPACE Complexity will go up.
  Hence, BFS is not recommended here.

- On the other hand, if the tree is not wide (Fewer Nodes to keep track of) and just DEEP, that means BFS
  is the Best Fit as our Queue/Data Storage will not grow much, compared to if we go with DFS

- BST Example

```
      10
  6      15
3   8       20
```

- DFS - InOrder UseCase

  - [3, 6, 8, 10, 15,20]
  - InOrder, always returns ordered data (if we use Binary Search Tree with ordered data)
  - Used Commonly with BST's - Notice we get all nodes in the tree in their underlying ORDER

- DFS - PreOrder UseCase

  - [10, 6, 3, 8, 15, 20] - Exact Replica of the Tree traversed
  - Can be used to "export" a tree structure so that it is easily reconstructed or copied or cloned.

- DFS - PostOrder UseCase

#### RECAP

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of Binary Trees where every node
  to the LEFT of a Parent is LESS than it's value and every node to the RIGHT is GREATER
- We can search through Trees using BFS and DFS
