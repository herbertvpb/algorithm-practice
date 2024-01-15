// Exercise Description:

// 1. Create an array of numbers.
//    - You can add any set of numbers to the array.
//    - Each number should be specified as a numeric value and separated by commas.

// 2. Change the value of the second element in the array.
//    - In JavaScript, array elements are indexed starting from 0.
//    - To change the value of the second element, target index 1 (since 0, 1, 2, ...).
//    - Assign a new numeric value to the second element.

// 3. Print the modified array to the console.
//    - Use the `console.log()` method to display the entire modified array.

// Expected Output:
// When you run this code, it should display the modified array with the second element changed to 25.

const numbersArray = [10, 20, 30, 40, 50];

console.log("Inital array:", numbersArray);

function changeElementInPosition(position, value) {
    numbersArray[position] = value;
}

function showNumbersArrays() {
    console.log("Modified array:", numbersArray);
}

changeElementInPosition(1, 25)
showNumbersArrays()
