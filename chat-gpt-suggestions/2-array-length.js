// Exercise Description:

// 1. Create an array of your favorite movies.
//    - You can add as many movie titles as you like to the array.
//    - Each movie title should be enclosed in double or single quotes and separated by commas.

// 2. Display the number of movies in the array.
//    - To find the number of movies in the array, use the `length` property of the array.
//    - Store the result in a variable named `numberOfMovies`.

// 3. Print the number of movies to the console.
//    - Use the `console.log()` method to display the number of movies along with a message.

// Expected Output:
// When you run this code, it should display the number of favorite movies in the console.

const favoriteMovies = ["The Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Dark Knight", "Forrest Gump"];
const numberOfMovies = favoriteMovies.length;

function showNumberOfMovies() {
    console.log("Number of favorite movies:", numberOfMovies);
}

showNumberOfMovies();