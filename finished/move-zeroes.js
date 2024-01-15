// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]
 
// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

const numsArray1 = [0,1,0,3,12];
const numsArray2 = [0];


// My first solution without help
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);            
        }
    }

    return nums;
};

console.log('Expected result [1,3,12,0,0] - [0]');
console.log(moveZeroes(numsArray1));
console.log(moveZeroes(numsArray2));

// Top rated leet code solution (One line solution :0)
var topRatedMoveZeroes = function(nums) {
    return nums.sort((a, b) => (a === 0) - (b === 0));
};

console.log('Expected result [1,3,12,0,0] - [0]');
console.log(topRatedMoveZeroes(numsArray1));
console.log(topRatedMoveZeroes(numsArray2));

// Top rated leet code solution (Using desestructuring)
var topRatedMoveZeroes2 = function(nums) {
    let left = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            [nums[left], nums[i]] = [nums[i], nums[left]] 
            left++;
        }
    }

    return nums;
};

console.log('Expected result [1,3,12,0,0] - [0]');
console.log(topRatedMoveZeroes2(numsArray1));
console.log(topRatedMoveZeroes2(numsArray2));
