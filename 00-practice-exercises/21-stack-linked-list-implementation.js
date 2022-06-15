class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const element = new Node(value);
    if (this.size === 0) {
      this.first = element;
      this.last = element;
    } else {
      var temp = this.first;
      this.first = element;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {}
}

const stack = new Stack();

stack.push(1);
console.log(stack);

stack.push(22);
console.log(stack);

stack.push(33);
console.log(stack);
