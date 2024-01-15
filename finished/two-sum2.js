// Exercício 1:
// Dada uma matriz de inteiros nums e um inteiro target, implemente uma função que retorne todos os pares únicos de índices (i, j) onde nums[i] + nums[j] == target. Se não houver nenhum par que atenda a essa condição, retorne uma lista vazia.

// Exemplo:
//                0  1  2  3  4  5  6  7
// Input: nums = [3, 1, 4, 1, 5, 9, 2, 6], target = 7
// Output: [ [ 2, 0 ], [ 6, 4 ], [ 7, 3 ] ]

const numsArray = [3, 1, 4, 1, 5, 9, 2, 6];
const desiredTarget = 7;

// My first solution
var pairSum = function(nums, target) {
    const outputArray = []
    const numsMap = new Map();

    for (i = 0; i < nums.length; i++) {
        const requiredNumber = target - nums[i];
        const isPresentInHashMap = numsMap.has(requiredNumber);

        if (isPresentInHashMap) {
            outputArray.push([i, numsMap.get(requiredNumber)])
        } 
    
        numsMap.set(nums[i], i)
    }

    return outputArray;
};


console.log(pairSum(numsArray, desiredTarget)); // [ [ 2, 0 ], [ 6, 4 ], [ 7, 3 ] ]

// Usando for aninhados
var pairSumTwoLoops = function(nums, target) {
    const outputArray = []
    const valuesAlreadyIncluded = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (!valuesAlreadyIncluded.includes(nums[i]) && !valuesAlreadyIncluded.includes(nums[j]) && nums[i] + nums[j] === target) {
          outputArray.push([i, j]);
          valuesAlreadyIncluded.push(nums[i]);
          valuesAlreadyIncluded.push(nums[j]);
        }
      }
    }

    return outputArray;
};

console.log(pairSumTwoLoops(numsArray, desiredTarget)); // [ [ 0, 2 ], [ 1, 7 ], [ 3, 7 ], [ 4, 6 ] ]


