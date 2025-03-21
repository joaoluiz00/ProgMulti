const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantos números deseja inserir? "));
const numeros = [];

for (let i = 0; i < quantidade; i++) {
    const numero = Number(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

const pares = numeros.filter(num => num % 2 === 0);

console.log(`\nNúmeros pares: ${pares}`);