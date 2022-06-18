class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
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
}

//       10
//    5       13
// 2    7  11    16

let tree = new BinarySearchTree();
console.log(tree);
tree.insert(10);
tree.insert(5);
tree.insert(13);
console.log(tree);
tree.insert(2);
tree.insert(7);
console.log(tree);
tree.insert(11);
tree.insert(16);
console.log(JSON.stringify(tree));
