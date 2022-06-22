const maxBinaryHeap = [41, 39, 33, 18, 27, 12];

const index = maxBinaryHeap.length - 1;

class MaxBinaryHeap {
  constructor(values) {
    this.values = values || [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const pIndex = Math.floor((idx - 1) / 2);
      const pValue = this.values[pIndex];
      if (element <= pValue) break;
      this.values[pIndex] = element;
      this.values[idx] = pValue;
      idx = pIndex;
    }
  }
}

const binaryHeap = new MaxBinaryHeap(maxBinaryHeap);
binaryHeap.insert(55);
console.log(binaryHeap);
