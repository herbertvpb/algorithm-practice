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
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value, // Na primeira instancia haverá apenas um valor
      next: null, // Sendo assim o next será nulo
      prev: null // o prev será nulo também
    }
    this.tail = this.head; // E a tail terá o mesmo valor da head, já que só temos um elemento
    this.length = 1;
  }

  append(value) {
    const newNode = new CustomNode(value);

    // Preenche o prev com o valor da cauda já que no append adicionamos um elemento no fim da lista
    newNode.prev = this.tail;
  
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1

    return this;
  }

  prepend(value) { // Add at the beginning
    const newNode = new CustomNode(value);

    // o novo elemento recebe a cabeça da lista
    newNode.next = this.head;

    // a cabeça da lista tem seu prev atualizado para o novo elemento
    this.head.prev = newNode;

    // a cabeça é atualizada para o novo elemento
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

    while (counter !== index && currentNode !== null) {
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

    // Create newNode with param value and next and prev null
    const newNode = new CustomNode(value);

    // search node before the param index 
    const previousNode = this.traverseToIndex(index-1);

    // get the node will be after the param index by next from previous node
    const follower = previousNode.next;

    // newNode next receives the value after the index
    newNode.next = follower;
    // newNode prev receives the value before the index
    newNode.prev = previousNode;
    
    // previousNode next receives newNode
    previousNode.next = newNode;
    // follower prev receives newNode
    follower.prev = newNode;

    this.length++;
       
    return this.printList();
  }

  remove(index) { // O(n) because traversal
    if (index >= this.length) {
      return this.printList();
    }

    if (index === 0) {
      const secondValue = this.head.next;
      secondValue.prev = null;
      this.head = secondValue;
      this.length--
      return this.printList();
    }

    // if (index === this.length-1) {
    //   const secondValue = this.head.next;
    //   secondValue.prev = null;
    //   this.head = secondValue;
    //   this.length--
    //   return this.printList();
    // }

    const nodeToBeDeleted = this.traverseToIndex(index);


    const previousNode = nodeToBeDeleted.prev;

    const nextNode = nodeToBeDeleted.next;

    console.log({ nodeToBeDeleted, previousNode, nextNode })

    previousNode.next = nextNode;

    if (nextNode) {
      nextNode.prev = previousNode;
    }

    if (index === this.length-1) {
      this.tail = previousNode;
    }

    this.length--

    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList()) 
myLinkedList.remove(3);
console.log(myLinkedList.printList()) 
console.log(myLinkedList)

// console.log(JSON.stringify(myLinkedList, null, 2))