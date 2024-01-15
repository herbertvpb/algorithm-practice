// Exercício 3:
// Dada uma matriz de inteiros nums e um inteiro target, implemente uma função que retorne True se existir algum par de números distintos (i, j) onde nums[i] + nums[j] == target. Caso contrário, retorne False.

// Exemplo:
// Input: nums = [4, 5, 1, 8], target = 9
// Output: True

// Input: nums = [4, 6, 1, 9], target = 9
// Output: False

const numsArray = [4, 5, 1, 8];
const numsArrayToGetFalse = [4, 6, 1, 9];
const desiredTarget = 9;

// Using Map()
const checkPairOfDifferentNumbersMap = (nums, target) => {
  const numsAlreadyChecked = new Map();

  for (i = 0; i < nums.length; i++) {
    const requiredNumber =  target - nums[i];

    if (numsAlreadyChecked.has(requiredNumber) && !numsAlreadyChecked.has(nums[i]) && nums[i] !== requiredNumber) {
      numsAlreadyChecked.set(nums[i], i);
      return true;
    } else {
      numsAlreadyChecked.set(nums[i], i);
    }
  }

  return false
}

console.log('Should get TRUE', checkPairOfDifferentNumbersMap(numsArray, desiredTarget));
console.log('Should get FALSE', checkPairOfDifferentNumbersMap(numsArrayToGetFalse, desiredTarget));


// Using Set()
const checkPairOfDifferentNumbersSet = (nums, target) => {
  const numsAlreadyChecked = new Set();

  for (i = 0; i < nums.length; i++) {
    const requiredNumber =  target - nums[i];

    if (numsAlreadyChecked.has(requiredNumber) && !numsAlreadyChecked.has(nums[i]) && nums[i] !== requiredNumber) {
      numsAlreadyChecked.add(nums[i]);
      return true;
    } else {
      numsAlreadyChecked.add(nums[i]);
    }
  }

  return false
}

console.log('Should get TRUE', checkPairOfDifferentNumbersSet(numsArray, desiredTarget));
console.log('Should get FALSE', checkPairOfDifferentNumbersSet(numsArrayToGetFalse, desiredTarget));


// Using 2 For
const checkPairOfDifferentNumbersFor = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && nums[i] !== nums[j]) return true
    }
  }

  return false;
}

console.log('Should get TRUE', checkPairOfDifferentNumbersFor(numsArray, desiredTarget));
console.log('Should get FALSE', checkPairOfDifferentNumbersFor(numsArrayToGetFalse, desiredTarget));