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
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let element = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    this.size--;
    return element.value;
  }
}

const stack = new Stack();
stack.push(111);
console.log(stack);

stack.push(222);
console.log(stack);

stack.push(333);
console.log(stack);

stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
