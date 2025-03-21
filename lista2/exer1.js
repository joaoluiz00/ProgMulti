const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantos nomes deseja cadastrar? "));
const nomes = [];

for (let i = 0; i < quantidade; i++) {
    const nome = prompt(`Digite o nome ${i + 1}: `);
    nomes.push(nome);
}

nomes.sort();

console.log(`\nNomes cadastrados em ordem alfabética: ${nomes}`);