// Exercise:
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [2, -3, 4, 1, -2, 1, 5, -3]
// Output: 10
// Explanation: The subarray [4, 1, -2, 1, 5] has the largest sum 10.

// Example 2:

// Input: nums = [3, -2, 0, -1, 2, 4, -2, 3]
// Output: 8
// Explanation: The subarray [2, 4, -2, 3] has the largest sum 8.

const numsArray1 = [2, -3, 4, 1, -2, 1, 5, -3];
const numsArray2 = [3, -2, 0, -1, 2, 4, -2, 3];

// Retornando também o subarray
var largestSumSubArray = function(nums) {
  let sum = 0;
  let maxSum = nums[0];

  let currentSubArray = [];
  let maxSubArray = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    currentSubArray.push(nums[i]);
    
    if (sum > maxSum){
      maxSum = sum;
      maxSubArray = [...currentSubArray]
    }

    if (sum < 0) {
      sum = 0;
      currentSubArray = []
    }
  }

  console.log({ maxSubArray  })

  return { maxSum, maxSubArray };
};

console.log('Resultado esperado: 9 - 7')
console.log(largestSumSubArray(numsArray1)) // 10
console.log(largestSumSubArray(numsArray2)) // 8