// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class CustomNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value, // Na primeira instancia haverá apenas um valor
      next: null // Sendo assim o next será nulo
    }
    this.tail = this.head; // E a tail terá o mesmo valor da head, já que só temos um elemento
    this.length = 1;
  }

  append(value) {
    const newNode = new CustomNode(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1

    return this;
  }

  prepend(value) {
    const newNode = new CustomNode(value);

    newNode.next = this.head;

    this.head = newNode;
    this.length += 1

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new CustomNode(value);

    const leaderNode = this.traverseToIndex(index-1);

    const holdingPointer = leaderNode.next;

    leaderNode.next = newNode;

    newNode.next = holdingPointer;

    this.length++;
       
    return this.printList();
  }

  remove(index) { // O(n) because traversal
    if (index >= this.length) {
      return this.printList();
    }

    if (index === 0) {
      const secondValue = this.head.next;
      this.head = secondValue;
      this.length--
      return this.printList();
    }

    // Get the node before that the node we want to delete
    const leaderNode = this.traverseToIndex(index-1);
    // Get the node we want to delete by the next of the previous node
    const nodeToBeDeleted = leaderNode.next;

    // Replace the leaderNode next with the nodeToBeDeleted next
    leaderNode.next = nodeToBeDeleted.next;

    this.length--

    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    // [ 1, 10, 24, 5, 16 ]

    let firtsNode = this.head; // = 1

    this.tail = this.head;

    let secondNode = firtsNode.next; // = 10

    while (secondNode) {
      const temp = secondNode.next; // = 24
      secondNode.next = firtsNode;
      firtsNode = secondNode; 
      secondNode = temp; 
    }

    this.head.next = null;
    this.head = firtsNode;

    return this.printList();;
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 24);
console.log(myLinkedList.printList()) // [ 1, 10, 24, 5, 16 ]
// myLinkedList.remove(1); // remove 10
// console.log(myLinkedList.printList()) // [ 1, 24, 5, 16 ]
console.log(myLinkedList.reverse()) // [ 1, 24, 5, 16 ]

// console.log(JSON.stringify(myLinkedList, null, 2))