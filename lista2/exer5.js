const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantos números deseja ordenar? "));
const numeros = [];

for (let i = 0; i < quantidade; i++) {
    const numero = Number(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

const crescente = [...numeros].sort((a, b) => a - b);
const decrescente = [...numeros].sort((a, b) => b - a);

console.log(`\nOrdem crescente: ${crescente}`);
console.log(`Ordem decrescente: ${decrescente}`);