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
