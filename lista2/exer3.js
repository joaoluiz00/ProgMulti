const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantos números deseja somar? "));
const numeros = [];

for (let i = 0; i < quantidade; i++) {
    const numero = Number(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(`\nTotal da soma: ${total}`);