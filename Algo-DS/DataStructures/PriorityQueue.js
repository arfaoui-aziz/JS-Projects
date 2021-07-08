//! using a MinBinaryHeap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //* O(log n) Insertion
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (priority > this.values[parent].priority) break;
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];
      index = parent;
    }
    return this;
  }

  //get highest priority
  //* O(log n) Removal
  dequeue() {
    let maxPriority = this.values[0];
    let val = this.values.pop();
    if (!this.values.length) return maxPriority;
    this.values[0] = val;
    let index = 0;
    let leftChild, rightChild, minChildIdx;
    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;

      if (leftIdx < this.values.length) {
        leftChild = this.values[leftIdx].priority;
        minChildIdx = leftIdx;
      }
      if (rightIdx < this.values.length) {
        rightChild = this.values[rightIdx].priority;
        if (rightChild < leftChild) minChildIdx = rightIdx;
        //else if (rightChild === leftChild) in case we want to add another condition
        // in case of equal priority
      }

      if (!minChildIdx || val.priority <= this.values[minChildIdx].priority)
        break;

      [this.values[index], this.values[minChildIdx]] = [
        this.values[minChildIdx],
        this.values[index],
      ];
      index = minChildIdx;
    }
    return maxPriority;
  }

  //! Colt Solution
  // dequeue(){
  //     const min = this.values[0];
  //     const end = this.values.pop();
  //     if(this.values.length > 0){
  //         this.values[0] = end;
  //         this.sinkDown();
  //     }
  //     return min;
  // }
  // sinkDown(){
  //     let idx = 0;
  //     const length = this.values.length;
  //     const element = this.values[0];
  //     while(true){
  //         let leftChildIdx = 2 * idx + 1;
  //         let rightChildIdx = 2 * idx + 2;
  //         let leftChild,rightChild;
  //         let swap = null;

  //         if(leftChildIdx < length){
  //             leftChild = this.values[leftChildIdx];
  //             if(leftChild.priority < element.priority) {
  //                 swap = leftChildIdx;
  //             }
  //         }
  //         if(rightChildIdx < length){
  //             rightChild = this.values[rightChildIdx];
  //             if(
  //                 (swap === null && rightChild.priority < element.priority) ||
  //                 (swap !== null && rightChild.priority < leftChild.priority)
  //             ) {
  //                swap = rightChildIdx;
  //             }
  //         }
  //         if(swap === null) break;
  //         this.values[idx] = this.values[swap];
  //         this.values[swap] = element;
  //         idx = swap;
  //     }
  // }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("green", 2);
priorityQueue.enqueue("green", 2);
priorityQueue.enqueue("yellow", 1);
priorityQueue.enqueue("red", 0);
priorityQueue.enqueue("yellow", 1);
priorityQueue.enqueue("red", 0);
console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
console.log("**********************************");

console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
