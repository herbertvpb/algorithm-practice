// Create a function that merge two sorted arrays
// For example 
// array1 = [0,3,4,31]
// array2 = [4,6,30]
// When we call the function mergeSortedArrays(array1, array1)
// This is the expected result: [0,3,4,4,6,30,31]

const myArray1 = [0, 3, 4, 31]
const myArray2 = [4, 6, 30]


// My first solution
function mergeSortedArrays(array1, array2) {
  // We need to create a new const to store the new merged array
  const mergedArray = []

  // We need to create lets to the first elements of each array
  let array1Item = array1[0];
  let array2Item = array2[0];

  // We need to create an index variable for each array
  let i = 1;
  let j = 1;

  // We need to check parameters
  if (!array1?.length) {
    return array2;
  }
  if (!array2?.length) {
    return array1;
  }

  // We can use the while loop to execute something while a condition is true
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++
    }
  }

  return mergedArray;
}

  
console.log('Result: ', mergeSortedArrays([], []))
