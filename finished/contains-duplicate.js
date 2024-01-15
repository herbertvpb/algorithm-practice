// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

const numsArray1 = [1,2,3,1];
const numsArray2 = [1,2,3,4];

// First solution without help
var containsDuplicate = function(nums) {
    let duplicated = false;
    const storedNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (storedNums.includes(nums[i])) {
            duplicated = true
        }
        storedNums.push(nums[i]);
    }

    return duplicated
};

console.log('Resultado esperado: true - false')
console.log(containsDuplicate(numsArray1)) // true
console.log(containsDuplicate(numsArray2)) // false


// Suggestion using set 
var containsDuplicateSet = function(nums) {
    const noRepeatedValues = new Set(nums);
    return noRepeatedValues.size !== nums.length;
};

console.log('Resultado esperado: true - false')
console.log(containsDuplicateSet(numsArray1)) // true
console.log(containsDuplicateSet(numsArray2)) // false