// Exercise Description:

// 1. Create an array of animals.
//    - Create an array and add the names of various animals to it.
//    - Each animal name should be enclosed in double or single quotes and separated by commas.

// 2. Use a for loop to print each animal to the console.
//    - Implement a for loop that iterates through the elements of the array.
//    - Inside the loop, use the `console.log()` method to display each animal name.

// Expected Output:
// When you run this code with the for loop, it should print each animal name to the console.


const animals = ['Lion', 'Tiger', 'Shark', 'Bison', 'Eagle'];

function showEachAnimal() {
    for (index = 0; index < animals.length; index++) {
        console.log(animals[index])
    }
}

showEachAnimal();