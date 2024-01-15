// Longest Word

// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.
// Words may also contain numbers, for example "Hello world123 567"

// Examples

// Input: "fun&!! time"
// Output: time

// Input: "I love dogs"
// Output: love

const sentence1 = 'fun&!! time';
const sentence2 = 'I love dogs';

function longestWord(sen) { 
    let longestWordResponse = ''
    
    sen.split(' ').forEach(word => {
        // Regex para remover os caracteres especiais
        const cleanWord = word.replace(/[^\w\s]/g, '');
    
        if (longestWordResponse.length < cleanWord.length) {
            longestWordResponse = cleanWord
        }
    });

    return longestWordResponse; 
}
     
console.log(sentence1,' ===> ', longestWord(sentence1)); // time
console.log(sentence1,' ===> ', longestWord(sentence2)); // love
console.log('============================================================='); // love

// Usando sort
function longestWordSort(sen) {
    //  A função match irá retornar um array com os resultados do regex
    const cleanSentence = sen.match(/[a-z]+/gi); // fun&!! time  => [ 'Fun', 'time' ]

    // ordena da maior para a menor palavra
    const sorted = cleanSentence.sort((a, b) => b.length - a.length);

    // retorna o primeiro elemento
    return sorted[0]; 
}
     
// keep this function call here 
console.log(sentence1,' ===> ', longestWordSort(sentence1)); // time
console.log(sentence1,' ===> ', longestWordSort(sentence2)); // love
console.log('============================================================='); // love


// Usando reduce
function longestWordReduce(sen) {
    //  A função match irá retornar um array com os resultados do regex
    const cleanSentence = sen.match(/\w+/g); // fun&!! time  => [ 'Fun', 'time' ]

    return cleanSentence.reduce((acc, curr) => acc.length >= curr.length ? acc : curr);
}
     
// keep this function call here 
console.log(sentence1,' ===> ', longestWordReduce(sentence1)); // time
console.log(sentence1,' ===> ', longestWordReduce(sentence2)); // love
console.log('============================================================='); // love



function longestWordOptimized(sen) {
    const cleanSentence = [];
    let startIndexToSlice = -1;

    for (let i = 0; i < sen.length; i++) {
        // lowercase para facilitar a comparação
        const char = sen[i].toLowerCase();

        // Caracteres especiais são menores do que 'a'
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            if (startIndexToSlice === -1) {
                startIndexToSlice = i;
            }
        // Caso seja um caractere especial ou número mas já tem alguma 
        // letra válida pois recebeu o index do caractere válido
        } else if (startIndexToSlice !== -1) {
            // adiciona no cleanSentence o retorno da função slice que vai pegar
            // tudo que estiver entre startIndexToSlice e o i excluindo o valor de i
            cleanSentence.push(sen.slice(startIndexToSlice, i));
            startIndexToSlice = -1;
        }
    }
    
    // Adiciona a última palavra, se houver alguma
    if (startIndexToSlice !== -1) {
        cleanSentence.push(sen.slice(startIndexToSlice));
    }

    return cleanSentence.reduce((acc, curr) => acc.length >= curr.length ? acc : curr, '');
}

console.log(sentence1,' ===> ', longestWordOptimized(sentence2)); // love
