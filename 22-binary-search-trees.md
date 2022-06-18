### Binary Search

- OBJECTIVES

  - Define what a tree is
  - Compare and contrast trees and lists
  - Explain the differences between Trees, Binary Trees, and binary search trees (BST)
  - Implement operations on Binary Search Trees (BST)

#### Introduction

- WHAT IS A TREE?

  - A data structure that consists of NODES in a PARENT/CHILD relationship

- LINKED LISTS / DOUBLY LINKED LISTS are `LINEAR`
- TREES are `NONLINEAR`

- TREE RULES

  - A NODE in a tree CAN ONLY reference nodes that are below them
  - A NODE CAN ONLY point to a CHILD,
  - We CANNOT have a CHILD Pointing to a Parents
  - We CANNOT have a NODE Pointing to a Sibling
  - A ROOT Cannot have two beginning points - Every Root must have one Parent
  - In TREE, Every NODE is moving away from the ROOT NODE
  - ALL the Arrows have to point downwards from the ROOR (PARENT ==> CHILD)

- TERMINOLOGY

  - ROOT - The Top Node is a TREE
  - CHILD - A Node directly connected to another node when moving away from the ROOT
  - PARENT - The converse notion of a CHILD
  - SIBLINGS - A Group of nodes with the same PARENT
  - LEAF - A Node with no CHILDREN on the Tree (The last element - bottom most)
  - EDGE - The connection between one node and another (`ARROW` ===>)

#### Uses For Trees

- TREES Real World Use Cases
  - HTML DOM
  - JSON Object Parsing
  - Network Routing
  - Abstract Syntax Tree (AST)
  - Artificial Intelligence (To predict Possible moves in a GAME) - Example: Tic Tac Toe Game
  - Folders in Operation Systems
  - Computer Files System

#### Intro To Binary Trees

- KIND/TYPES OF TREES

  - BINARY TREES

    - AA Tree
    - AVL Tree
    - Binary Search Tree
    - Pagoda
    - T-tree
    - Treap
    - etc. (A huge List...)

  - B-TREES

    - B-tree
    - B+tree
    - B+-tree
    - B Sharp Tree
    - Dancing Tree
    - 2-3 Tree
    - 2-3-4 Tree
    - etc. (A huge List...)

  - HEAP

    - Heap
    - Binary Heap
    - B-Heap
    - Weak Heap
    - Binomial Heap
    - AF Heap
    - Leonardo Heap
    - Treap
    - Beap
    - etc. (A huge List...)

  - TREES

    - Trie
    - Radix Tree
    - Suffix Tree
    - FM-index
    - X-fast Trie
    - Y-fast Trie
    - etc. (A huge List...)

  - MULTIWAY TREE

    - Ternary tree
    - K-ary tree
    - And-or tree
    - (a,b)-tree
    - Link/cut tree
    - etc. (A huge List...)

  - SPACE-PARTITIONING TREES
    - Segment tree
    - Interval tree
    - Range tree
    - Bin
    - K-d tree
    - Quadtree
    - Octree
    - Z-order
    - UB-tree
    - etc. (A huge List...)

- TOPICS WE FOCUS ON

  - TREES
    - In a Tree, EACH NODE can have 0...N Children
  - BINARY TREES
    - In Binary Tree, EACH NODE can have 0..2 Children (MAX 2)
  - BINARY SEARCH TREES
    - In Binary SEARCH Tree, EACH NODE can have 0..2 Children (MAX 2)
    - Binary Search Trees are used to store data that can be COMPARED and that is SORTABLE
    - It is SORTED in a Particular Way
      - Left Side of the NODE will have the Number/Value that is LESS than PARENT NODE
      - Right Side of the NODE will have the Number/Value that is GREATER than PARENT NODE

- HOW BINARY SEARCH TREE (BST) WORKS
  - Every parent node has at most TWO children (0...2)
  - Every node to the LEFT of a Parent Node is always LESS than the Parent
  - Every node to the RIGHT of a Parent Node is always GREATER than the Parent

#### Searching A Binary Search Trees

- RECAP RULES

  - Two Children at MOST
  - LEFT - Always LESS than Parent Node
  - RIGHT - Always GREATER than Parent Node

- Example:

```
      10
  5       13
2  7   11   16
```

#### Binary Search Tree (BST) Classes

- BinarySearchTree

```
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
```

- Node

```
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

#### Binary Search Tree (BST): Insert

- Inserting a Node in a Binary Tree

- INSERT Pseudocode (Steps - ITERATIVELY or RECURSIVELY)

  - Create a new Node
  - Strating at the ROOT
    - Check if there is a ROOT, IF NOT - The Root noew becomes the new node!
    - If there is a ROOT, check if the value of the new node is GREATER than or LESS than the value of the ROOT
    - If it is GREATER
      - Check to see if there is a node to the RIGHT
        - If there is, move to that node and repeat these steps
        - If there is not, add that node as the RIGHT property
  - If it is LESS
    - Check to see if there is a node to the LEFT
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the LEFT property

- INSERT Code

```
insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // ELSE Case
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // Handle Duplicates
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
```
