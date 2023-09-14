// Exercise Description:

// 1. Create two arrays.
//    - Create two separate arrays, each containing a list of elements (such as numbers, strings, or any data type).
//    - Each array should be specified using square brackets [] and separated by commas.

// 2. Concatenate the two arrays into a single array.
//    - Write code to concatenate (combine) the two arrays into a new single array.
//    - You can use the `concat` method or the spread operator (...) to achieve this.

// Expected Output:
// When you run this code, it should concatenate the two arrays into a new single array and display the combined array.

const firstArray = [1, 2, 3, 4, 5];
const secondArray = ['a', 'b', 'c', 'd', 'e',];

function getTheConcatenationConcat() {
    return firstArray.concat(secondArray)
};

function getTheConcatenationSpread() {
    return [...firstArray, ...secondArray]
};

console.log('Using concat: ', getTheConcatenationConcat());
console.log('Using spread: ', getTheConcatenationSpread());
