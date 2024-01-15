class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Function within a class are called methods
    get(index) { // This is a O(1) operation!!
        return this.data[index]
    }

    push(item) { // This is a O(1) operation!!
        this.data[this.length] = item;
        this.length++;
        return this.length; // The typical push method return the length of array
    }

    pop() { // This is a O(1) operation!!
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--
        return lastItem; // The typical pop method return the removed item
    }

    shiftItems(index) { // This is a O(n) operation!!
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        // WE have to delete it, otherwise the array will have the last element repeated
        // For example if index = 1 and the array is [0,1,2]
        // the response would be [0,2,2] if we not delete the last item
        this.length--;
    }

    delete(index) { // This is a O(n) operation!!
        const item = this.data[index];
        this.shiftItems(index)
        return item;
    }

    unshift(item) { // This is a O(n) operation!!
        // Given [0,1,2]
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i-1];
        } // Will became [0,0,1,2]

        this.data[0] = item; // Add item in the first position
        this.length++ // increase the length
        return this.length;
    }

    insert(index, item) { // This is a O(n) operation!!
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        // Given [0,1,2] and index 1 and item 4
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        } // Will became [0,1,1,2]

        this.data[index] = item; // Add item in the index position => [0,4,1,2]
        this.length++ // increase the length
        return this.length;
    }

    toString() {
        let result = '[';

        for (let i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                result = result + this.data[i];
            } else {
                result = result + this.data[i] + ',';
            }
        }

        return result + ']'        
    }

    // reverse() {
    //     let revertedArray = [];

    //     for (let i = this.length - 1; i >= 0; i--) {
    //         revertedArray = [...revertedArray, this.data[i]];
    //     }

    //     return revertedArray;
    // }


    // reverse() {
    //     let revertedArray = {...this.data};
    //     const total = this.length - 1

    //     for (let i = total; i >= 0; i--) {
    //         revertedArray[total - i] = this.data[i]
    //     }

    //     return revertedArray;
    // }

    reverse() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            const temp = this.data[i];
            // 0 / 1           // 3 / 2     
            this.data[i] = this.data[this.length - 1 - i]
            // 3 / 2                       // 0 / 1 
            this.data[this.length - 1 - i] = temp;
        }
        return this.data;
    }

    concat(anotherArray) {
        let concatenatedArray = {};
        let concatenatedLength = 0;
        
        for (let i = 0; i < this.length; i++) {
            concatenatedArray[i] = this.data[i];
            concatenatedLength++
        }

        const total = anotherArray.length + concatenatedLength;

        for (let i = concatenatedLength; i < total; i++) {
            const position = i + anotherArray.length - total;
            const elementToAdd = anotherArray.data[position];            
            concatenatedArray[i] = elementToAdd;
            concatenatedLength++
        }

        return {
            data: concatenatedArray,
            length: concatenatedLength,
        }
    }


    toString2() {
        let result = '[';
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) {
                result += ', ';
            }
        }

        result += ']';
        return result       
    }

}

const newArray = new MyArray();


newArray.push('hi');

// console.log(newArray.get(0)); // => hi

newArray.push('you');
newArray.push('!');
// console.log(newArray); // => MyArray { length: 3, data: { '0': 'hi', '1': 'you', '2': '!' } }

// newArray.pop();
// console.log(newArray); // => MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }

// newArray.delete(0);
// console.log(newArray); // => MyArray { length: 1, data: { '0': 'you' } }

newArray.insert(1,'test');

// console.log(newArray); // => MyArray { length: 3, data: { '0': 'hi', '1': 'you', '2': '!' } }

// console.log(newArray.reverse())
console.log(newArray.concat({data: { '0': 'Whats', '1': 'your', '2': 'name', '3': '?' }, length: 4 }))

// console.log('Result', newArray.toString())
// console.log('Result2', newArray.toString2())







