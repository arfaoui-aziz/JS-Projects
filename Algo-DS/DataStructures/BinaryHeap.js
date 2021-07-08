class MaxBinaryHeap {
  constructor() {
    this.values = [190, 60, 100, 50, 29, 30, 14, 6, 15, 1];
  }
  //   ! Create a MaxBinaryHeap from an array
  create(arr) {
    let parent = null;
    let oldParent = null;
    for (let i = 0; i < arr.length; i++) {
      this.values.push(arr[i]);
      parent = Math.floor((i - 1) / 2);
      oldParent = i;
      while (this.values[oldParent] > this.values[parent]) {
        [this.values[oldParent], this.values[parent]] = [
          this.values[parent],
          this.values[oldParent],
        ];
        oldParent = parent;
        parent = Math.floor((parent - 1) / 2);
      }
    }
    return this;
  }

  //! insert an element to our MaxBinaryHeap
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (val < this.values[parent]) break;
      [this.values[index], this.values[parent]] = [
        this.values[parent],
        this.values[index],
      ];

      index = parent;
    }
    return this;
  }

  //remove root (sink Down)
  extractMax() {
    //* Swap
    let max = this.values[0];
    let val = this.values.pop();
    //! Edge Case if we have only one element in the array we pop the value
    //! and reassign it to the first element again so we never have an empty Heap
    //! we always have at least one element in our Heap
    if (this.values.length === 0) return max;
    this.values[0] = val;
    //* Sink Down
    let index = 0;
    let leftChild, rightChild, largestChildIdx;
    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;

      if (leftIdx < this.values.length) {
        leftChild = this.values[leftIdx];
        largestChildIdx = leftIdx;
      }
      if (rightIdx < this.values.length) {
        rightChild = this.values[rightIdx];
        largestChildIdx = leftChild > rightChild ? leftIdx : rightIdx;
      }

      if (!largestChildIdx) break;
      if (val < this.values[largestChildIdx]) {
        [this.values[index], this.values[largestChildIdx]] = [
          this.values[largestChildIdx],
          this.values[index],
        ];

        index = largestChildIdx;
      } else {
        break;
      }
    }
    return max;
  }
}

heap = new MaxBinaryHeap();

// console.log(heap.create([100, 29, 30, 15, 50, 190, 14, 6]));

// console.log(heap.insert(60));
// console.log(heap.insert(1));
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
