// Exercise Description:

// 1. Create an array of numbers.
//    - Create an array and add a series of numbers (numeric values) to it.
//    - Each number should be specified as a numeric value and separated by commas.

// 2. Calculate the sum of all elements in the array.
//    - Write code to calculate the sum of all the numbers in the array.
//    - You can use a `for` loop or the `reduce` method for this purpose.

// Expected Output:
// When you run this code, it should calculate and display the sum of all numbers in the array.

const numbers = [1, 5, 10, 15, 20, 25, 30];

function getSumOfNumbersFor() {
    let sumOfNumbers = 0;

    for (index = 0; index < numbers.length; index++) {
        sumOfNumbers = sumOfNumbers + numbers[index]
    }

    return sumOfNumbers;
}

console.log('[FOR] Total:', getSumOfNumbersFor())

function getSumOfNumbersReduce() {
    return numbers.reduce((acc, current) => {
        return acc + current
    }, 0)
}

console.log('[REDUCE] Total:', getSumOfNumbersReduce())