// Exercício 2:
// Dada uma matriz de inteiros nums e um inteiro target, implemente uma função que retorne a quantidade total de pares únicos (i, j) onde nums[i] + nums[j] == target.

// Exemplo:
// Input: nums = [1, 2, 3, 4, 3], target = 5
// Output: 2
//                 0  1  2  3  4 
const numsArray = [1, 2, 3, 4, 3];
const desiredTarget = 5;

// Usando for aninhados
var countUniquePairsLoops = function(nums, target) {
  let result = 0;
  const valuesAlreadyIncluded = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      const pairIsAlreadyStored = valuesAlreadyIncluded.includes(nums[i]) && valuesAlreadyIncluded.includes(nums[j]);

      if (!pairIsAlreadyStored && nums[i] + nums[j] === target) {
        valuesAlreadyIncluded.push(nums[i], nums[j])
        result++
      }
    }
  }

  console.log({valuesAlreadyIncluded}) // Output: [ 1, 4, 2, 3 ]

  return result;
};

console.log(countUniquePairsLoops(numsArray, desiredTarget));

// Usando Set()
var countUniquePairsSet = function(nums, target) {
  let result = 0;
  const valuesAlreadyChecked = new Set();

  for (i = 0; i < nums.length; i++) {
    const requiredNumber = target - nums[i];

   // Se valuesAlreadyChecked possui o numero requerido (quer dizer que ele existe em nums e foi iterado anteriormente)
   // e ainda não possui o número da iteração atual
   if (valuesAlreadyChecked.has(requiredNumber) && !valuesAlreadyChecked.has(nums[i])) {
    valuesAlreadyChecked.add(nums[i]);
    result++
  } else {
    valuesAlreadyChecked.add(nums[i])
   }
  }

  console.log({valuesAlreadyChecked}) // Output: Set(4) { 1, 2, 3, 4 }

  return result;
};

console.log(countUniquePairsSet(numsArray, desiredTarget));


// Usando Map()
var countUniquePairsMap = function(nums, target) {
  let result = 0;
  const valuesAlreadyChecked = new Map();

  for (i = 0; i < nums.length; i++) {
    const requiredNumber = target - nums[i];

   // Se valuesAlreadyChecked possui o numero requerido (quer dizer que ele existe em nums e foi iterado anteriormente)
   // e ainda não possui o número da iteração atual
   if (valuesAlreadyChecked.has(requiredNumber) && !valuesAlreadyChecked.has(nums[i])) {
    valuesAlreadyChecked.set(nums[i], i);
    result++
  } else {
    valuesAlreadyChecked.set(nums[i], i)
   }
  }

  console.log({valuesAlreadyChecked}) // Output: Map(4) { 1 => 0, 2 => 1, 3 => 4, 4 => 3 } 

  return result;
};

console.log(countUniquePairsMap(numsArray, desiredTarget));
