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
