// Create a function that reverse a string;
// 'Hi My name is Herbert' should be:
// 'trebreH si eman yM iH'

// My first solution
// function reverseString(str) {
//   let reversedString = '';

//   for (i = 0; i <= str.length; i++ ) {
//     const element = str[str.length - i];
//     if (element) {
//       reversedString += element;
//     }
//   }

//   return reversedString;
// }


// function reverseString(str) {
//   // check input
//   if (!str || str.length < 2 || typeof str !== 'string') {
//     return 'Invalid value'
//   }

//   // Create array to store the letters
//   const backwards = []
//   // Store the str length
//   const totalItems = str.length - 1;

//   // For decrescente
//   // enquanto i que é o total de item for maior ou igual a 0, a função será executada.
//   for (let i = totalItems; i >= 0; i --) {
//     backwards.push(str[i])
//   }

//   // Usa o join para transformar o array em uma string
//   return backwards.join('');
// }


const reverseString = str => !str || str.length < 2 || typeof str !== 'string'
  ? 'Invalid value'
  : str?.split('').reverse().join('');

console.log(reverseString('Hi My name is Herbert')) // trebreH si eman yM iH

