### Binary Search

- OBJECTIVES

  - Define what a tree is
  - Compare and contrast trees and lists
  - Explain the differences between Trees, Binary Trees, and binary search trees (BST)
  - Implement operations on Binary Search Trees (BST)

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
