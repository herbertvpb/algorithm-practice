// Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

// **Example 1:**
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// **Example 2:**
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// **Constraints:**
// - `1 <= nums.length <= 105`
// - `231 <= nums[i] <= 231 - 1`
// - `0 <= k <= 105`

// **Follow up:**
// - Try to come up with as many solutions as you can. There are at least **three** different ways to solve this problem.
// - Could you do it in-place with `O(1)` extra space?



const arrayNums1 = [1,2,3,4,5,6,7];
const arrayNums2 = [-1,-100,3,99];

// Using Extra memory (Time O(n) / Space O(n))
var rotateExtra = function(nums, k) {
    const extraArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Resto da divisão 
        const mod = (i + k) % nums.length

        extraArray[mod] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = extraArray[i]
    }

    return nums;
};

// console.log(rotateExtra(arrayNums1, 3)); // [5,6,7,1,2,3,4]
// console.log(rotateExtra(arrayNums2, 2)); // [3,99,-1,-100]

// O(1) space complexity / O(n) time complexity
var rotateReverse = function(nums, k) {
    // It is used when k > nums.length, but this looks unnecessary to me
    k = k % nums.length;

    let left = 0;
    let right = nums.length - 1; // 7 - 1 = 6

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left = left + 1;
        right = right - 1;
    }
    console.log(...nums)
    

    left = 0;
    right = k - 1;
    // Reorder the left side
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left = left + 1;
        right = right - 1;
    }

    left = k;
    right = nums.length - 1;
    // Reorder the right side
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left = left + 1;
        right = right - 1;
    }

    return nums;
};

console.log(rotateReverse([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
// console.log(rotateReverse([-1,-100,3,99], 2)); // [3,99,-1,-100]