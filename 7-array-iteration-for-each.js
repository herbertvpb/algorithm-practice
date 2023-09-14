// Exercise Description:

// 1. Create an array of cities.
//    - Create an array and add the names of different cities to it.
//    - Each city name should be enclosed in double or single quotes and separated by commas.

// 2. Use the forEach method to print each city to the console.
//    - Utilize the `forEach` method to iterate through the elements of the array.
//    - Inside the `forEach` loop, use the `console.log()` method to display each city name.

// Expected Output:
// When you run this code with the `forEach` loop, it should print each city name to the console.

const cities = ['London', 'New York', 'San Francisco', 'Los Angeles', 'Belo Horizonte'];

function showEachCity() {
    cities.forEach(city => {
        console.log(city)
    })
}

showEachCity();