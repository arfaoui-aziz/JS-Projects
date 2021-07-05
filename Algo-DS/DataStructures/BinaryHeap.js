class MaxBinaryHeap {
  constructor() {
    this.values = [];
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
    let parent = Math.floor((index - 1) / 2);
    while (this.values[index] > this.values[parent]) {
      [this.values[index], this.values[parent]] = [
        this.values[parent],
        this.values[index],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
    return this;
  }
}

heap = new MaxBinaryHeap();

console.log(heap.create([100, 29, 30, 15, 50, 190, 14, 6]));
console.log(heap.insert(60));
