// Exercise Description:

// 1. Create an empty array.
//    - Initialize an empty array that will be used to store names.

// 2. Add three names to the array using the `push` method.
//    - Use the `push` method to add three names to the end of the array.

// 3. Remove one name from the array using the `pop` method.
//    - Use the `pop` method to remove the last name from the array.

// 4. Print the modified array and the removed name to the console.
//    - Use the `console.log()` method to display both the modified array and the removed name.

// Expected Output:
// When you run this code, it should display the modified array with three names and the removed name.


const names = [];

function addNameToArray(name) {
    names.push(name)
}

function removeLastNameFromArray() {
    names.pop()
}

addNameToArray('Herbert');
addNameToArray('Larissa');
addNameToArray('Bruce');

console.log('Array after push: ', names);

removeLastNameFromArray();

console.log('Array after pop: ', names);

