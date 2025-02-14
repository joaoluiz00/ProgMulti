const prompt = require("prompt-sync")();

const largura = parseFloat(prompt('Informe a Largura do Retangulo: '));
const altura = parseFloat(prompt('Informa a altura do Retangulo: '));

const area = (largura * altura);

console.log(`A Área em m² é ${area}`);