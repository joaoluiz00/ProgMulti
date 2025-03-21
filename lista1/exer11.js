const prompt = require("prompt-sync")();

const altura = parseFloat(prompt("Informe alguma altura: "))
const peso = parseFloat(prompt("Informe algum peso: "));

const IMC = peso / (altura * altura);

console.log(`O IMC dessas proporções é ${IMC}`);

