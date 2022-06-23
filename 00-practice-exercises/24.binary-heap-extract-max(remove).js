const maxBinaryHeap = [41, 39, 33, 18, 27, 12];

class MaxBinaryHeap {
  constructor(values = []) {
    this.values = values;
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let elementIndex = this.values.length - 1;
    let elementValue = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (elementValue > parentValue) {
        this.values[parentIndex] = elementValue;
        this.values[elementIndex] = parentValue;
        elementIndex = parentIndex;
      }
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    let element = this.values[0];
    let length = this.values.length;
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const binaryHeap = new MaxBinaryHeap(maxBinaryHeap);
console.log(binaryHeap); //  [41, 39, 33, 18, 27, 12]
binaryHeap.insert(55); // [55, 39, 41, 18, 27, 12, 33];
console.log(binaryHeap);
console.log(binaryHeap.extractMax());
console.log(binaryHeap);
