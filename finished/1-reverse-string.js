// Create a function that reverse a string;
// 'Hi My name is Herbert' should be:
// 'trebreH si eman yM iH'

// My first solution
function reverseString(str) {
    const splittedStr = str.split('');
    let reverseStringArr = [];
    
    for (index = 0; index <= splittedStr.length; index++) {
        reverseStringArr.push(splittedStr[splittedStr.length - index])
    }

    return reverseStringArr.join('')
}

console.log(reverseString('Hi My name is Herbert'))

// Andrei solution 1
function reverseStringAndrei(str) {
    // Check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm thats is not good';
    }

    const backwards = []
    const totalItems = str.length - 1;

    // We dont need to use split() because strings are arrays in JS

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

console.log(reverseStringAndrei('Hi My name is Andrei'))


// Andrei solution 2
function reverseStringAndreiClean(str) {
    // Check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm thats is not good';
    }

    return str.split('').reverse().join('');
}

console.log(reverseStringAndreiClean('Hi My name is Andrei 2'))

// Andrei solution 3
const reverseStringAndreiCleanArrow = str =>
    !str || str.length < 2 || typeof str !== 'string'
        ? 'hmm thats is not good'
        : [...str].reverse().join('')

console.log(reverseStringAndreiCleanArrow('Hi My name is Andrei 3'))


// Chat GPT solution 1 LOOP
function reverseString(str) {
    if (typeof str !== 'string') {
      throw new Error('Input is not a valid string');
    }
  
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}

const reversedString1 = reverseString('Hi My name is Chat GPT 1');
console.log(reversedString1); // Output: '1 TPG tahC si eman yM iH'
  

// Chat GPT solution 2 Array reverse
function reverseString(str) {
    if (typeof str !== 'string') {
      throw new Error('Input is not a valid string');
    }
  
    return str.split('').reverse().join('');
  }
  
const reversedString2 = reverseString('Hi My name is Chat GPT 2');
console.log(reversedString2); // Output: '2 TPG tahC si eman yM iH'
  

// Chat GPT solution 3 RECURSION
function reverseString(str) {
    if (typeof str !== 'string') {
      throw new Error('Input is not a valid string');
    }
  
    if (str === '') {
      return '';
    }
    return reverseString(str.substring(1)) + str.charAt(0);
}

const reversedString3 = reverseString('Hi My name is Chat GPT 3');
console.log(reversedString3); // Output: '3 TPG tahC si eman yM iH'
  