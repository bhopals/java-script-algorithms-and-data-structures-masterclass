const maxBinaryHeap = [41, 39, 33, 18, 27, 12];

class MaxBinaryHeap {
  constructor(array) {
    this.array = array;
  }

  insert(value) {
    this.array.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let elementIndex = this.array.length - 1;
    let elementValue = this.array[elementIndex];
    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      const parentValue = this.array[parentIndex];
      if (elementValue > parentValue) {
        this.array[parentIndex] = elementValue;
        this.array[elementIndex] = parentValue;
        elementIndex = parentIndex;
      }
    }
  }
}
const binaryHeap = new MaxBinaryHeap(maxBinaryHeap);
console.log(binaryHeap);
binaryHeap.insert(55);
console.log(binaryHeap);
