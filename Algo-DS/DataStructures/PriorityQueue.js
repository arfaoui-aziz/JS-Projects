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
    if (this.values.length < 1) return maxPriority;
    this.values[0] = val;
    let index = 0;
    let leftChild, rightChild, minPriorityIdx;
    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;

      if (leftIdx < this.values.length) {
        leftChild = this.values[leftIdx].priority;
        minPriorityIdx = leftIdx;
      }
      if (rightIdx < this.values.length) {
        rightChild = this.values[rightIdx].priority;
        minPriorityIdx = rightChild < leftChild ? rightIdx : leftIdx;
      }

      if (!minPriorityIdx) break;
      if (val.priority > this.values[minPriorityIdx].priority) {
        [this.values[index], this.values[minPriorityIdx]] = [
          this.values[minPriorityIdx],
          this.values[index],
        ];
        index = minPriorityIdx;
      } else {
        break;
      }
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
console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());
console.log("**********************************");

console.log(priorityQueue.dequeue());
console.log("**********************************");
console.log(priorityQueue.dequeue());

// class MinBinaryHeap {
//   constructor() {
//     this.values = [];
//   }

//   insert(val) {
//     this.values.push(val);
//     let index = this.values.length - 1;

//     while (index) {
//       let parent = Math.floor((index - 1) / 2);
//       if (val > this.values[parent]) break;
//       [this.values[index], this.values[parent]] = [
//         this.values[parent],
//         this.values[index],
//       ];

//       index = parent;
//     }
//     return this;
//   }

//   extractMin() {
//     let min = this.values[0];
//     let end = this.values.pop();
//     if (this.values.length === 0) return min;
//     this.values[0] = end;
//     let index = 0;
//     let rightChild, leftChild, minChildIdx;
//     while (true) {
//       let leftIdx = index * 2 + 1;
//       let rightIdx = index * 2 + 2;

//       if (leftIdx < this.values.length) leftChild = this.values[leftIdx];
//       if (rightIdx < this.values.length) {
//         rightChild = this.values[rightIdx];
//         minChildIdx = leftChild < rightChild ? leftIdx : rightIdx;
//       } else {
//         minChildIdx = leftIdx;
//       }

//       if (end > this.values[minChildIdx]) {
//         [this.values[index], this.values[minChildIdx]] = [
//           this.values[minChildIdx],
//           this.values[index],
//         ];
//         index = minChildIdx;
//       } else {
//         break;
//       }
//     }
//     return min;
//   }
// }

// let min = new MinBinaryHeap();
// min.insert(1);
// min.insert(1);
// min.insert(0);
// min.insert(2);
// min.insert(3);
// min.insert(1);
// min.insert(0);

// console.log(min);

// console.log(min.extractMin());
// console.log(min.extractMin());
// console.log(min.extractMin());
// console.log(min.extractMin());
// console.log("*************************************");
// console.log(min);
// console.log(min.extractMin());
// console.log("*************************************");
// console.log(min);
// console.log(min.extractMin());
// console.log(min.extractMin());
