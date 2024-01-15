// Create a function that merge two sorted arrays
// For example 
// array1 = [0,3,4,31]
// array2 = [4,6,30]
// When we call the function mergeSortedArrays(array1, array1)
// This is the expected result: [0,3,4,4,6,30,31]

const myArray1 = [0, 3, 4, 31]
const myArray2 = [4, 6, 30]


// My first solution
function mergeSortedArraysMy(arr1, arr2) {
    const concatenatedArray = arr1.concat(arr2);
    const sortedArray = concatenatedArray.sort((a, b) => a - b);

    return sortedArray
}

console.log('Result: ',mergeSortedArraysMy(myArray1, myArray2))


// Andrei solution
function mergeSortedArraysAndrei(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // Check input
    if (!array1.length) {
        return array2;
    }
    if (!array2.length) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++
        }
    }

    return mergedArray;
}

console.log('Andrei Result: ', mergeSortedArraysAndrei(myArray1, myArray2))


// Chat GPT solution 1 - Using Additional Space
function mergeSortedArraysGpt1(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
}
console.log('Chat GPT Result 1: ', mergeSortedArraysGpt1(myArray1, myArray2))

// Chat GPT solution 2 - In-Place Merging
function mergeSortedArraysGpt2(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let k = arr1.length + arr2.length - 1;
  
    while (i >= 0 && j >= 0) {
      if (arr1[i] > arr2[j]) {
        arr1[k] = arr1[i];
        i--;
      } else {
        arr1[k] = arr2[j];
        j--;
      }
      k--;
    }
  
    while (j >= 0) {
      arr1[k] = arr2[j];
      j--;
      k--;
    }

    return arr1
}
  
console.log('Chat GPT Result 2: ', mergeSortedArraysGpt2(myArray1, myArray2))

// Chat GPT solution 3 - Recursive Approach
function mergeSortedArraysGpt3(arr1, arr2) {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
  
    let mergedArray = [];
  
    if (arr1[0] < arr2[0]) {
      mergedArray.push(arr1.shift());
    } else {
      mergedArray.push(arr2.shift());
    }
  
    return mergedArray.concat(mergeSortedArraysGpt3(arr1, arr2));
}
  
console.log('Chat GPT Result 3: ', mergeSortedArraysGpt3(myArray1, myArray2))
