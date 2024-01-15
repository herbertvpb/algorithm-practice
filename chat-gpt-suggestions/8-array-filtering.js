// Exercise Description:

// 1. Create an array of ages.
//    - Create an array and add a list of ages (numbers) to it.
//    - Each age should be specified as a numeric value and separated by commas.

// 2. Use the filter method to remove ages below 18.
//    - Apply the `filter` method to the array to create a new array that contains only ages that are 18 years old or older.

// Expected Output:
// When you run this code with the `filter` method, it should create a new array with ages that are 18 or older, leaving out ages below 18.

const ages = [10, 12, 14, 16, 18, 21, 30, 40];

function getAgesOlder18() {
    return ages.filter(age => age >= 18)
}

const agesBelow18 = getAgesOlder18();

console.log(agesBelow18);