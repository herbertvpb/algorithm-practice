// Exercise Description:

// 1. Create an array of your favorite colors.
//    - You can add any number of color names to the array.
//    - Each color name should be enclosed in double or single quotes and separated by commas.

// 2. Access the third color in the array.
//    - In JavaScript, array elements are indexed starting from 0.
//    - For example: To access the third color, use the index 2 (since 0, 1, 2).
//    - Store the accessed color in a variable named `color`.

// 3. Print the third color to the console.
//    - Use the `console.log()` method to display the third color along with a message.

// Expected Output:
// When you run this code, it should display the third favorite color in the console.

const favoriteColors = ["blue", "red", "green", "purple", "yellow"];

function showColorInPosition(position) {
    const color = favoriteColors[position];
    console.log(`favorite color on position ${position}:`, color);
}

showColorInPosition(2)