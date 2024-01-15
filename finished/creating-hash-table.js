class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // Função hash que vai gerar a key baseado no limite imposto pelo size
    // _ indica que é uma funçaõ privada
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length            
        }
        return hash;
    }

    // O(1)
    set(key, value) {  
        let address = this._hash(key);

        // Verifica se o endereço com esta chave ainda n existe
        if (!this.data[address]) {
            // Adiciona um array vazio no elemento com o indice do endereço criado
            this.data[address] = [];
        }
        // Adiciona um array com a chave e valor dentro deste elemento caso ele já exista,
        // desta forma mais de um elemento podem estar no mesmo endereço
        this.data[address].push([key, value])

        return this.data;
    }

    // SEM colisão = O(1) // Um bom limite de tamanho da tabela
    // COM colisão = O(n) // Um baixo limite de tamanho da tabela
    get(key) {
        let address = this._hash(key);
        const KEY = 0;
        const VALUE = 1;

        const currentBucket = this.data[address];

        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                const currentPair = currentBucket[i];

                if (currentPair[KEY] === key) {
                    return currentPair[VALUE];
                }                
            }
        }

        return undefined;
    }

    // Método para obter todas keys preenchidas 
    keys() {
        const KEY = 0;
        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            // this.data[i] => [ [ 'key', value ] ],
            if (this.data[i]) {
                keysArray.push(this.data[i][0][KEY])
            }
        }

        return keysArray;
    }

    // Método para obter todos os values preenchidos 
    values() {
        const VALUE = 1;
        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            // this.data[i] => [ [ 'key', value ] ],
            if (this.data[i]) {
                keysArray.push(this.data[i][0][VALUE])
            }
        }

        return keysArray;
    }

    keysWithoutCollision() {
        const KEY = 0;
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                for (let j = 0; j < this.data[i].length; j++) {
                    result.push(this.data[i][j][KEY])
                }
            }
        }
        return result; 
    }

    valuesWithoutCollision() {
        const VALUE = 1;
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                for (let j = 0; j < this.data[i].length; j++) {
                    result.push(this.data[i][j][VALUE])
                }
            }
        }
        return result; 
    }

}

const myHashTable = new HashTable(2);
console.log(myHashTable.set('grapes', 10000)); // [ <3 empty items>, [ [ 'grapes', 10000 ] ], <1 empty item> ]
console.log(myHashTable.set('apples', 54)); // [ <3 empty items>, [ [ 'grapes', 10000 ] ], [ [ 'apples', 54 ] ] ]
console.log(myHashTable.set('oranges', 2)); // 54
console.log(myHashTable.get('grapes')); // 10000
console.log(myHashTable.get('apples')); // 54
console.log(myHashTable.keys()); // [ 'oranges', 'grapes', 'apples' ]
console.log(myHashTable.values()); // [ 2, 10000, 54 ]
console.log(myHashTable.keysWithoutCollision()); // [ 'oranges', 'grapes', 'apples' ]
console.log(myHashTable.valuesWithoutCollision()); // [ 10000, 54, 2 ]