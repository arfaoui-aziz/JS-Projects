class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // sinon  we get an infinite loop in case of inserting an existing value
      if (value === currentNode.value) return;
      while (true) {
        if (value < currentNode.val) {
          //   if (!currentNode.left) { //
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }
  //Colt Solution
  //   insert(value){
  //     var newNode = new Node(value);
  //     if(this.root === null){
  //         this.root = newNode;
  //         return this;
  //     }
  //     var current = this.root;
  //     while(true){
  //         if(value === current.value) return undefined;
  //         if(value < current.value){
  //             if(current.left === null){
  //                 current.left = newNode;
  //                 return this;
  //             }
  //             current = current.left;
  //         } else {
  //             if(current.right === null){
  //                 current.right = newNode;
  //                 return this;
  //             }
  //             current = current.right;
  //         }
  //     }
  // }

  find(val) {
    if (!this.root) return;
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      currentNode =
        val < currentNode.val ? currentNode.left : currentNode.right;
    }
    return;
  }
  //Colt Solution
  // find(value){
  //     if(this.root === null) return false;
  //     var current = this.root,
  //         found = false;
  //     while(current && !found){
  //         if(value < current.value){
  //             current = current.left;
  //         } else if(value > current.value){
  //             current = current.right;
  //         } else {
  //             found = true;
  //         }
  //     }
  //     if(!found) return undefined;
  //     return current;
  // }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(1);
bst.insert(5);
bst.insert(2);

console.log(bst);

console.log(bst.find(5));
console.log(bst.find(3));
console.log(bst.find(2));
console.log(bst.find(9));
