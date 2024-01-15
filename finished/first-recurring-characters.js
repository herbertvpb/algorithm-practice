//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const input1 = [2,5,1,2,3,5,1,2,4];
const input2 = [2,1,1,2,3,5,1,2,4];
const input3 = [2,3,4,5];
const inputBonus = [2,5,5,2,3,5,1,2,4];

function firstRecurringCharacter(input) {
    const checkedNumbers = new Set();

    for (let index = 0; index < input.length; index++) {
        // console.log(input[index]);
        if (checkedNumbers.has(input[index])) {
            return input[index];
        }
        checkedNumbers.add(input[index])
    }

    return undefined;
}

function firstRecurringCharacterNested(input) {
    // Loop externo para percorrer cada elemento do array
    for (let i = 0; i < input.length; i++) {
        // Loop interno para comparar o elemento na posição i com os elementos anteriores
        for (let j = 0; j < i; j++) {
            // Verifica se o elemento na posição i é igual a algum elemento anterior
            if (input[i] === input[j]) {
                // Se encontrado, retorna o elemento repetido
                return input[i];
            }
        }
    }
    // Se nenhum elemento se repete, retorna undefined
    return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// console.log('should be 2 and got => ', firstRecurringCharacter(input1)) // 2
// console.log('should be 1 and got => ', firstRecurringCharacter(input2)) // 1
// console.log('should be undefined and got => ', firstRecurringCharacter(input3)) // undefined
console.log('should be 5 and got => ', firstRecurringCharacter(inputBonus)) // 5
console.log('should be 5 and got => ', firstRecurringCharacterNested(inputBonus)) // 5